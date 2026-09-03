#import "AppDelegate.h"
#import "MDFeedViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    MDFeedViewController *feed = [[MDFeedViewController alloc] initWithGallery:@"trending"];
    self.navigationController = [[UINavigationController alloc] initWithRootViewController:feed];

    UINavigationBar *bar = self.navigationController.navigationBar;
    bar.tintColor = [UIColor colorWithRed:0.76 green:0.25 blue:0.05 alpha:1.0];
    if ([bar respondsToSelector:@selector(setBarTintColor:)]) {
        bar.barTintColor = [UIColor colorWithRed:0.76 green:0.25 blue:0.05 alpha:1.0];
        bar.translucent = NO;
        bar.titleTextAttributes = @{NSForegroundColorAttributeName: [UIColor colorWithRed:1 green:0.97 blue:0.93 alpha:1]};
    }

    UITabBarController *tabs = [[UITabBarController alloc] init];
    MDFeedViewController *latest = [[MDFeedViewController alloc] initWithGallery:@"latest"];
    MDFeedViewController *top = [[MDFeedViewController alloc] initWithGallery:@"top"];
    MDFeedViewController *classics = [[MDFeedViewController alloc] initWithGallery:@"classics"];
    UINavigationController *n1 = [[UINavigationController alloc] initWithRootViewController:feed];
    UINavigationController *n2 = [[UINavigationController alloc] initWithRootViewController:latest];
    UINavigationController *n3 = [[UINavigationController alloc] initWithRootViewController:top];
    UINavigationController *n4 = [[UINavigationController alloc] initWithRootViewController:classics];
    n1.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"Trending" image:nil tag:0];
    n2.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"Latest" image:nil tag:1];
    n3.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"Top" image:nil tag:2];
    n4.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"Classics" image:nil tag:3];
    NSArray *bars = [NSArray arrayWithObjects:n1, n2, n3, n4, nil];
    for (UINavigationController *nav in bars) {
        nav.navigationBar.tintColor = bar.tintColor;
        if ([nav.navigationBar respondsToSelector:@selector(setBarTintColor:)]) {
            nav.navigationBar.barTintColor = bar.barTintColor;
            nav.navigationBar.translucent = NO;
        }
    }
    tabs.viewControllers = bars;
    if ([tabs.tabBar respondsToSelector:@selector(setBarTintColor:)]) {
        tabs.tabBar.barTintColor = [UIColor colorWithRed:0.95 green:0.93 blue:0.89 alpha:1];
    }

    self.window.rootViewController = tabs;
    self.window.backgroundColor = [UIColor colorWithRed:0.95 green:0.93 blue:0.89 alpha:1];
    [self.window makeKeyAndVisible];
    return YES;
}

@end
