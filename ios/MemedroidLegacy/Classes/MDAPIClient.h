#import <UIKit/UIKit.h>

/* Point this at the Memedroid Legacy website that serves /api/feed */
#ifndef kMDAPIBaseURL
#define kMDAPIBaseURL @"http://127.0.0.1:8080"
#endif

typedef void (^MDJSONHandler)(id json, NSError *error);
typedef void (^MDImageHandler)(UIImage *image, NSError *error);

@interface MDAPIClient : NSObject

+ (MDAPIClient *)sharedClient;

- (void)getJSON:(NSString *)path handler:(MDJSONHandler)handler;
- (void)getImage:(NSString *)urlString handler:(MDImageHandler)handler;

@end
