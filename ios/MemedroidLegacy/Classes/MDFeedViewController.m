#import "MDFeedViewController.h"
#import "MDAPIClient.h"
#import "MDMeme.h"
#import "MDMemeCell.h"
#import "MDDetailViewController.h"
#import "MDGenerateViewController.h"

@interface MDFeedViewController ()
@property (copy, nonatomic) NSString *gallery;
@property (strong, nonatomic) NSMutableArray *memes;
@end

@implementation MDFeedViewController

- (id)initWithGallery:(NSString *)gallery {
    self = [super initWithStyle:UITableViewStylePlain];
    if (self) {
        _gallery = [gallery copy];
        _memes = [NSMutableArray array];
        self.title = [gallery capitalizedString];
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.tableView.rowHeight = 92;
    self.tableView.backgroundColor = [UIColor colorWithRed:0.95 green:0.93 blue:0.89 alpha:1];
    self.tableView.separatorColor = [UIColor colorWithRed:0.85 green:0.80 blue:0.74 alpha:1];
    self.refreshControl = [[UIRefreshControl alloc] init];
    [self.refreshControl addTarget:self action:@selector(reloadFeed) forControlEvents:UIControlEventValueChanged];
    self.navigationItem.rightBarButtonItem =
        [[UIBarButtonItem alloc] initWithTitle:@"Make"
                                         style:UIBarButtonItemStylePlain
                                        target:self
                                        action:@selector(openGenerator)];
    [self reloadFeed];
}

- (void)openGenerator {
    MDGenerateViewController *gen = [[MDGenerateViewController alloc] init];
    [self.navigationController pushViewController:gen animated:YES];
}

- (void)reloadFeed {
    NSString *path = [NSString stringWithFormat:@"/api/feed?g=%@", self.gallery];
    [[MDAPIClient sharedClient] getJSON:path handler:^(id json, NSError *error) {
        [self.refreshControl endRefreshing];
        if (![json isKindOfClass:[NSDictionary class]]) {
            [self showError:@"Could not reach the Legacy API. Set kMDAPIBaseURL."];
            return;
        }
        NSArray *list = [json objectForKey:@"memes"];
        [self.memes removeAllObjects];
        for (NSDictionary *d in list) {
            if ([d isKindOfClass:[NSDictionary class]]) {
                [self.memes addObject:[MDMeme memeWithDictionary:d]];
            }
        }
        [self.tableView reloadData];
    }];
}

- (void)showError:(NSString *)message {
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Memedroid Legacy"
                                                    message:message
                                                   delegate:nil
                                          cancelButtonTitle:@"OK"
                                          otherButtonTitles:nil];
    [alert show];
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return (NSInteger)self.memes.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *cid = @"meme";
    MDMemeCell *cell = [tableView dequeueReusableCellWithIdentifier:cid];
    if (!cell) cell = [[MDMemeCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cid];
    MDMeme *meme = [self.memes objectAtIndex:(NSUInteger)indexPath.row];
    [cell configureWithMeme:meme];
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    MDMeme *meme = [self.memes objectAtIndex:(NSUInteger)indexPath.row];
    MDDetailViewController *detail = [[MDDetailViewController alloc] initWithMeme:meme];
    [self.navigationController pushViewController:detail animated:YES];
}

@end
