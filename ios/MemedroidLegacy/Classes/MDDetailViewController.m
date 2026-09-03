#import "MDDetailViewController.h"
#import "MDMeme.h"
#import "MDAPIClient.h"

@interface MDDetailViewController ()
@property (strong, nonatomic) MDMeme *meme;
@property (strong, nonatomic) UIScrollView *scroll;
@property (strong, nonatomic) UIImageView *imageView;
@property (strong, nonatomic) UILabel *body;
@end

@implementation MDDetailViewController

- (id)initWithMeme:(MDMeme *)meme {
    self = [super init];
    if (self) {
        _meme = meme;
        self.title = meme.title;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor colorWithRed:0.95 green:0.93 blue:0.89 alpha:1];
    self.scroll = [[UIScrollView alloc] initWithFrame:self.view.bounds];
    self.scroll.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    [self.view addSubview:self.scroll];

    self.imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width, 240)];
    self.imageView.contentMode = UIViewContentModeScaleAspectFit;
    self.imageView.backgroundColor = [UIColor blackColor];
    self.imageView.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    [self.scroll addSubview:self.imageView];

    self.body = [[UILabel alloc] initWithFrame:CGRectMake(12, 252, self.view.bounds.size.width - 24, 200)];
    self.body.numberOfLines = 0;
    self.body.font = [UIFont systemFontOfSize:15];
    self.body.backgroundColor = [UIColor clearColor];
    self.body.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    [self.scroll addSubview:self.body];

    NSMutableString *text = [NSMutableString stringWithFormat:@"%@\nby %@ · %ld%% · %ld votes\n\n",
                             self.meme.title, self.meme.author, (long)self.meme.score, (long)self.meme.votes];
    for (NSDictionary *c in self.meme.comments) {
        [text appendFormat:@"%@: %@\n\n", [c objectForKey:@"user"], [c objectForKey:@"text"]];
    }
    self.body.text = text;

    [[MDAPIClient sharedClient] getImage:self.meme.imageURL handler:^(UIImage *image, NSError *error) {
        if (!image) return;
        self.imageView.image = image;
        CGFloat w = self.view.bounds.size.width;
        CGFloat h = w * (image.size.height / MAX(image.size.width, 1));
        self.imageView.frame = CGRectMake(0, 0, w, h);
        CGSize fit = [self.body sizeThatFits:CGSizeMake(w - 24, 4000)];
        self.body.frame = CGRectMake(12, h + 12, w - 24, fit.height);
        self.scroll.contentSize = CGSizeMake(w, h + 24 + fit.height);
    }];
}

@end
