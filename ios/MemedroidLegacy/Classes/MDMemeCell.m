#import "MDMemeCell.h"
#import "MDMeme.h"
#import "MDAPIClient.h"

@interface MDMemeCell ()
@property (strong, nonatomic) UIImageView *thumbView;
@property (strong, nonatomic) UILabel *titleLabel;
@property (strong, nonatomic) UILabel *metaLabel;
@property (copy, nonatomic) NSString *token;
@end

@implementation MDMemeCell

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if (self) {
        self.backgroundColor = [UIColor colorWithRed:1 green:0.98 blue:0.96 alpha:1];
        _thumbView = [[UIImageView alloc] initWithFrame:CGRectMake(8, 8, 76, 76)];
        _thumbView.contentMode = UIViewContentModeScaleAspectFill;
        _thumbView.clipsToBounds = YES;
        _thumbView.backgroundColor = [UIColor colorWithWhite:0.9 alpha:1];
        [self.contentView addSubview:_thumbView];

        _titleLabel = [[UILabel alloc] initWithFrame:CGRectMake(94, 10, 210, 44)];
        _titleLabel.font = [UIFont boldSystemFontOfSize:15];
        _titleLabel.numberOfLines = 2;
        _titleLabel.backgroundColor = [UIColor clearColor];
        [self.contentView addSubview:_titleLabel];

        _metaLabel = [[UILabel alloc] initWithFrame:CGRectMake(94, 56, 210, 24)];
        _metaLabel.font = [UIFont systemFontOfSize:12];
        _metaLabel.textColor = [UIColor colorWithRed:0.42 green:0.37 blue:0.33 alpha:1];
        _metaLabel.backgroundColor = [UIColor clearColor];
        [self.contentView addSubview:_metaLabel];
        self.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    }
    return self;
}

- (void)layoutSubviews {
    [super layoutSubviews];
    CGFloat w = self.contentView.bounds.size.width;
    self.titleLabel.frame = CGRectMake(94, 10, w - 110, 44);
    self.metaLabel.frame = CGRectMake(94, 56, w - 110, 24);
}

- (void)configureWithMeme:(MDMeme *)meme {
    self.titleLabel.text = meme.title;
    self.metaLabel.text = [NSString stringWithFormat:@"%ld%% · %@ · %ldh",
                           (long)meme.score, meme.author, (long)meme.hoursAgo];
    self.thumbView.image = nil;
    self.token = meme.imageURL;
    NSString *token = [meme.imageURL copy];
    [[MDAPIClient sharedClient] getImage:meme.imageURL handler:^(UIImage *image, NSError *error) {
        if ([self.token isEqualToString:token]) {
            self.thumbView.image = image;
        }
    }];
}

@end
