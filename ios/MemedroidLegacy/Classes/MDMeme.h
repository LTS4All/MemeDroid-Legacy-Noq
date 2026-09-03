#import <Foundation/Foundation.h>

@interface MDMeme : NSObject
@property (copy, nonatomic) NSString *memeId;
@property (copy, nonatomic) NSString *title;
@property (copy, nonatomic) NSString *imageURL;
@property (copy, nonatomic) NSString *author;
@property (assign, nonatomic) NSInteger score;
@property (assign, nonatomic) NSInteger votes;
@property (assign, nonatomic) NSInteger hoursAgo;
@property (strong, nonatomic) NSArray *comments;
+ (MDMeme *)memeWithDictionary:(NSDictionary *)dict;
@end
