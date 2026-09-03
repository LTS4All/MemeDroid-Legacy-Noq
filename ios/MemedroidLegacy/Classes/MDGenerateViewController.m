#import "MDGenerateViewController.h"
#import "MDAPIClient.h"

@interface MDGenerateViewController ()
@property (strong, nonatomic) UIImageView *preview;
@property (strong, nonatomic) UILabel *topCaption;
@property (strong, nonatomic) UILabel *bottomCaption;
@property (strong, nonatomic) UITextField *topField;
@property (strong, nonatomic) UITextField *bottomField;
@property (strong, nonatomic) NSArray *templates;
@property (assign, nonatomic) NSInteger index;
@end

@implementation MDGenerateViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"Generate";
    self.view.backgroundColor = [UIColor colorWithRed:0.95 green:0.93 blue:0.89 alpha:1];
    CGFloat w = self.view.bounds.size.width;

    self.preview = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, w, 220)];
    self.preview.contentMode = UIViewContentModeScaleAspectFit;
    self.preview.backgroundColor = [UIColor blackColor];
    self.preview.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    self.preview.userInteractionEnabled = YES;
    [self.view addSubview:self.preview];

    self.topCaption = [self captionLabel:CGRectMake(8, 8, w - 16, 40)];
    self.bottomCaption = [self captionLabel:CGRectMake(8, 172, w - 16, 40)];
    [self.preview addSubview:self.topCaption];
    [self.preview addSubview:self.bottomCaption];

    self.topField = [self field:CGRectMake(12, 232, w - 24, 40) placeholder:@"Top text"];
    self.bottomField = [self field:CGRectMake(12, 280, w - 24, 40) placeholder:@"Bottom text"];
    [self.topField addTarget:self action:@selector(syncCaptions) forControlEvents:UIControlEventEditingChanged];
    [self.bottomField addTarget:self action:@selector(syncCaptions) forControlEvents:UIControlEventEditingChanged];
    [self.view addSubview:self.topField];
    [self.view addSubview:self.bottomField];

    UIButton *next = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    next.frame = CGRectMake(12, 328, w - 24, 44);
    [next setTitle:@"Next template" forState:UIControlStateNormal];
    [next addTarget:self action:@selector(nextTemplate) forControlEvents:UIControlEventTouchUpInside];
    next.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    [self.view addSubview:next];

    [[MDAPIClient sharedClient] getJSON:@"/api/templates" handler:^(id json, NSError *error) {
        if (![json isKindOfClass:[NSDictionary class]]) return;
        self.templates = [json objectForKey:@"templates"];
        self.index = 0;
        [self showTemplate];
    }];
}

- (UILabel *)captionLabel:(CGRect)frame {
    UILabel *l = [[UILabel alloc] initWithFrame:frame];
    l.textColor = [UIColor whiteColor];
    l.textAlignment = NSTextAlignmentCenter;
    l.font = [UIFont boldSystemFontOfSize:18];
    l.numberOfLines = 2;
    l.backgroundColor = [UIColor clearColor];
    l.shadowColor = [UIColor blackColor];
    l.shadowOffset = CGSizeMake(1, 1);
    l.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    return l;
}

- (UITextField *)field:(CGRect)frame placeholder:(NSString *)ph {
    UITextField *f = [[UITextField alloc] initWithFrame:frame];
    f.borderStyle = UITextBorderStyleRoundedRect;
    f.placeholder = ph;
    f.font = [UIFont systemFontOfSize:16];
    f.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    f.contentVerticalAlignment = UIControlContentVerticalAlignmentCenter;
    return f;
}

- (void)syncCaptions {
    self.topCaption.text = [self.topField.text uppercaseString];
    self.bottomCaption.text = [self.bottomField.text uppercaseString];
}

- (void)nextTemplate {
    if (self.templates.count == 0) return;
    self.index = (self.index + 1) % (NSInteger)self.templates.count;
    [self showTemplate];
}

- (void)showTemplate {
    if (self.index < 0 || self.index >= (NSInteger)self.templates.count) return;
    NSDictionary *t = [self.templates objectAtIndex:(NSUInteger)self.index];
    NSString *url = [[t objectForKey:@"image"] description];
    [[MDAPIClient sharedClient] getImage:url handler:^(UIImage *image, NSError *error) {
        self.preview.image = image;
    }];
}

@end
