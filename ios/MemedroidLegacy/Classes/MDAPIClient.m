#import "MDAPIClient.h"
#import <UIKit/UIKit.h>

@interface MDAPIClient ()
@property (strong, nonatomic) NSCache *imageCache;
@end

@implementation MDAPIClient

+ (MDAPIClient *)sharedClient {
    static MDAPIClient *client;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        client = [[MDAPIClient alloc] init];
    });
    return client;
}

- (id)init {
    self = [super init];
    if (self) {
        _imageCache = [[NSCache alloc] init];
        _imageCache.countLimit = 80;
    }
    return self;
}

- (void)getJSON:(NSString *)path handler:(MDJSONHandler)handler {
    NSString *urlString = [kMDAPIBaseURL stringByAppendingString:path];
    NSURLRequest *req = [NSURLRequest requestWithURL:[NSURL URLWithString:urlString]
                                         cachePolicy:NSURLRequestReloadIgnoringLocalCacheData
                                     timeoutInterval:20.0];
    [NSURLConnection sendAsynchronousRequest:req
                                       queue:[NSOperationQueue mainQueue]
                           completionHandler:^(NSURLResponse *response, NSData *data, NSError *error) {
        if (error || !data) {
            if (handler) handler(nil, error);
            return;
        }
        NSError *jsonError = nil;
        id obj = [NSJSONSerialization JSONObjectWithData:data options:0 error:&jsonError];
        if (handler) handler(obj, jsonError);
    }];
}

- (void)getImage:(NSString *)urlString handler:(MDImageHandler)handler {
    if (!urlString.length) {
        if (handler) handler(nil, [NSError errorWithDomain:@"MD" code:1 userInfo:nil]);
        return;
    }
    UIImage *cached = [self.imageCache objectForKey:urlString];
    if (cached) {
        if (handler) handler(cached, nil);
        return;
    }
    NSURLRequest *req = [NSURLRequest requestWithURL:[NSURL URLWithString:urlString]
                                         cachePolicy:NSURLRequestReturnCacheDataElseLoad
                                     timeoutInterval:30.0];
    [NSURLConnection sendAsynchronousRequest:req
                                       queue:[NSOperationQueue mainQueue]
                           completionHandler:^(NSURLResponse *response, NSData *data, NSError *error) {
        if (error || !data) {
            if (handler) handler(nil, error);
            return;
        }
        UIImage *img = [UIImage imageWithData:data];
        if (img) [self.imageCache setObject:img forKey:urlString];
        if (handler) handler(img, nil);
    }];
}

@end
