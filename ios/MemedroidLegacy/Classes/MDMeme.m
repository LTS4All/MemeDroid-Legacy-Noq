#import "MDMeme.h"

@implementation MDMeme

+ (MDMeme *)memeWithDictionary:(NSDictionary *)dict {
    MDMeme *m = [[MDMeme alloc] init];
    m.memeId = [[dict objectForKey:@"id"] description];
    m.title = [[dict objectForKey:@"title"] description];
    m.imageURL = [[dict objectForKey:@"image"] description];
    m.author = [[dict objectForKey:@"author"] description];
    m.score = [[dict objectForKey:@"score"] integerValue];
    m.votes = [[dict objectForKey:@"votes"] integerValue];
    m.hoursAgo = [[dict objectForKey:@"hoursAgo"] integerValue];
    id comments = [dict objectForKey:@"comments"];
    m.comments = [comments isKindOfClass:[NSArray class]] ? comments : [NSArray array];
    return m;
}

@end
