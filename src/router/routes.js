import store from '@/state/store';

export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/pages/account/login.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'users' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/pages/account/register.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'users' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/forgot-password',
        name: 'Forgot-password',
        component: () => import('../views/pages/account/forgot-password.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'users' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                if (import.meta.env.VITE_VUE_APP_DEFAULT_AUTH === "firebase") {
                    store.dispatch('auth/logOut');
                } else {
                    store.dispatch('authfack/logout');
                }
                const authRequiredOnPreviousRoute = routeFrom.matched.some(
                    (route) => route.push('/login')
                );
                // Navigate back to previous page, or home as a fallback
                next(authRequiredOnPreviousRoute ? { name: 'users' } : { ...routeFrom });
            },
        },
    },
    {
        path: '/admin',
        name: 'Overview',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/overview.vue')
    },
    {
        path: '/admin/influencers',
        name: 'Influencers List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/influencers/index.vue')
    },
    {
        path: '/admin/influencers/create',
        name: 'Create Influencers',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/influencers/update.vue')
    },
    {
        path: '/admin/cosplayers/',
        name: 'Cosplayers List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/cosplayers/index.vue')
    },
    {
        path: '/admin/cosplayers/create',
        name: 'Create Cosplayers',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/cosplayers/update.vue')
    },
    {
        path: '/admin/on-air/',
        name: 'On-air List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/on-air/index.vue')
    },
    {
        path: '/admin/on-air/create',
        name: 'Create On-air',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/talents/on-air/update.vue')
    },
    {
        path: '/admin/case-studies/',
        name: 'Case Studies List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/case-studies/index.vue')
    },
    {
        path: '/admin/case-studies/create',
        name: 'Create Case Study',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/case-studies/update.vue')
    },
    {
        path: '/admin/pages/',
        name: 'Pages List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/pages/index.vue')
    },
    {
        path: '/admin/pages/create',
        name: 'Create Page',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/pages/update.vue')
    },
    {
        path: '/admin/sections/',
        name: 'Sections List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/sections/index.vue')
    },
    {
        path: '/admin/sections/create',
        name: 'Create Section',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/sections/update.vue')
    },
    {
        path: '/admin/services/',
        name: 'Services List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/services/index.vue')
    },
    {
        path: '/admin/services/create',
        name: 'Create Service',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/services/update.vue')
    },
    {
        path: '/admin/icons/',
        name: 'Icons List',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/index.vue')
    },
    {
        path: '/admin/icons/create',
        name: 'Create Icons',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/update.vue')
    },
    {
        path: '/admin/clients',
        name: 'Clients/Brands List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/brands/index.vue')
    },
    {
        path: '/admin/messages',
        name: 'Messages List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/messages/index.vue')
    },
    {
        path: '/admin/messages/single',
        name: 'Messages Single',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/messages/reademail.vue')
    },
    {
        path: '/admin/users',
        name: 'Users List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/users/index.vue')
    },
    {
        path: '/admin/roles',
        name: 'Roles & Permissions List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/roles/index.vue')
    },
    {
        path: '/admin/notifications',
        name: 'Notifications List',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/notifications/index.vue')
    },


    {
        path: '/',
        name: 'Home',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/index.vue')
    },
    {
        path: '/services',
        name: 'Services',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/services/index.vue')
    },
    {
        path: '/services/influencer-marketing',
        name: 'Influencer Marketing',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/services/influencer-marketing.vue')
    },
    {
        path: '/services/talent-management',
        name: 'Talent Management',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/services/talent-management.vue')
    },
    {
        path: '/services/celebrity-collaboration',
        name: 'Celebrity Collaboration',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/services/celebrity-collaboration.vue')
    },
    {
        path: '/talents',
        name: 'Talents',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/index.vue')
    },
    {
        path: '/talents/influencers',
        name: 'Influencers Talents',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/influencers.vue')
    },
    {
        path: '/talents/cosplayers',
        name: 'Cosplayers Talents',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/cosplayers.vue')
    },
    {
        path: '/talents/on-air',
        name: 'On-Air Talents',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/on-air.vue')
    },
    {
        path: '/talents/influencers/single',
        name: 'Influencers Profile',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/influencer-profile.vue')
    },
    {
        path: '/talents/on-air/single',
        name: 'On-Air Profile',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/talents/on-air-profile.vue')
    },
    {
        path: '/case-studies',
        name: 'Case Studies',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/case-studies/index.vue')
    },
    {
        path: '/case-studies/single',
        name: 'Single Case Study',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/case-studies/single.vue')
    },
    {
        path: '/about-us',
        name: 'About Us',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/about-us.vue')
    },
    {
        path: '/contact-us',
        name: 'Let\'s Talk',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/contact-us.vue')
    },
    {
        path: '/privacy-policy',
        name: 'Privacy Policy',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/privacy-policy.vue')
    },
    {
        path: '/terms-and-conditions',
        name: 'Terms & Conditions',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/terms-conditions.vue')
    },
    
    
    {
        path: '/chat',
        name: 'Chat',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/chat/index.vue')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/calendar/index.vue')
    },
    {
        path: '/ecommerce/products',
        name: 'Products',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/products.vue')
    },
    {
        path: '/ecommerce/product-detail',
        name: 'Product Detail',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/product-detail.vue')
    },
    {
        path: '/ecommerce/orders',
        name: 'Orders',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/orders.vue')
    },
    {
        path: '/ecommerce/customers',
        name: 'Customers',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/customers.vue')
    },
    {
        path: '/ecommerce/cart',
        name: 'Cart',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/cart.vue')
    },
    {
        path: '/ecommerce/checkout',
        name: 'Checkout',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/checkout.vue')
    },
    {
        path: '/ecommerce/shops',
        name: 'Shops',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/shops.vue')
    },
    {
        path: '/ecommerce/add-product',
        name: 'Add-product',
        meta: { authRequired: true },
        component: () => import('../views/pages/ecommerce/add-product.vue')
    },
    {
        path: '/email/inbox',
        name: 'Inbox',
        meta: { authRequired: true },
        component: () => import('../views/pages/email/inbox.vue')
    },
    {
        path: '/email/read',
        name: 'Read Email',
        meta: { authRequired: true },
        component: () => import('../views/pages/email/reademail.vue')
    },
    {
        path: '/auth/login-1',
        name: 'login-1',
        meta: { authRequired: true },
        component: () => import('../views/pages/sample-auth/login-1.vue')
    },
    {
        path: '/auth/register-1',
        name: 'register-1',
        meta: { authRequired: true },
        component: () => import('../views/pages/sample-auth/register-1.vue')
    },
    {
        path: '/auth/lock-screen-1',
        name: 'Lock Screen',
        meta: { authRequired: true },
        component: () => import('../views/pages/sample-auth/lock-screen-1.vue')
    },
    {
        path: '/auth/recoverpwd-1',
        name: 'Recover Password',
        meta: { authRequired: true },
        component: () => import('../views/pages/sample-auth/recoverpwd-1.vue')
    },
    {
        path: '/apps/kanban-board',
        name: 'Kanban Board',
        meta: { authRequired: true },
        component: () => import('../views/pages/kanbanboard/index.vue')
    },
    {
        path: '/pages/starter',
        name: 'Starter Page',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/starter.vue')
    },
    {
        path: '/pages/maintenance',
        name: 'Maintenance',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/maintenance.vue')
    },
    {
        path: '/pages/coming-soon',
        name: 'Coming-soon',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/coming-soon.vue')
    },
    {
        path: '/pages/timeline',
        name: 'Timeline',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/timeline/index.vue')
    },
    {
        path: '/pages/faqs',
        name: 'Faqs',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/faqs.vue')
    },
    {
        path: '/pages/pricing',
        name: 'Pricing',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/pricing/index.vue')
    },
    {
        path: '/pages/error-500',
        name: 'Error 500',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/error-500.vue')
    },
    {
        path: '/icons/font-awesome',
        name: 'Font Awesome 5',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/font-awesome/index.vue')
    },
    /* {
        path: '/icons/dripicons',
        name: 'Dripicons',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/dripicons.vue')
    }, */
    {
        path: '/icons/material-design',
        name: 'Material Design',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/materialdesign/index.vue')
    },
    {
        path: '/icons/remix',
        name: 'Remix Icons',
        meta: { authRequired: true },
        component: () => import('../views/pages/icons/remix/index.vue')
    },
    {
        path: '/ui/buttons',
        name: 'Buttons',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/buttons.vue')
    },
    {
        path: '/ui/alerts',
        name: 'Alerts',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/alerts.vue')
    },
    {
        path: '/ui/grid',
        name: 'Grid',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/grid.vue')
    },
    {
        path: '/ui/cards',
        name: 'Cards',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/cards.vue')
    },
    {
        path: '/ui/carousel',
        name: 'Carousel',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/carousel.vue')
    },
    {
        path: '/ui/dropdowns',
        name: 'Dropdowns',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/dropdowns.vue')
    },
    {
        path: '/ui/images',
        name: 'Images',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/images.vue')
    },
    {
        path: '/ui/modals',
        name: 'Modals',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/modals.vue')
    },
    {
        path: '/ui/rangeslider',
        name: 'Range Slider',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/rangeslider.vue')
    },
    {
        path: '/ui/progressbar',
        name: 'Progressbar',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/progressbars.vue')
    },
    {
        path: '/ui/sweet-alert',
        name: 'Sweet Alert',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/sweet-alert.vue')
    },
    {
        path: '/ui/tabs-accordion',
        name: 'Tabs & Accordion',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/tabs-accordions.vue')
    },
    {
        path: '/ui/typography',
        name: 'Typography',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/typography.vue')
    },
    {
        path: '/ui/video',
        name: 'Video',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/video.vue')
    },
    {
        path: '/ui/general',
        name: 'General',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/general.vue')
    },
    {
        path: '/ui/lightbox',
        name: 'Lightbox',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/lightbox.vue')
    },
    {
        path: '/ui/notification',
        name: 'Notification',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/notification.vue')
    },
    {
        path: '/ui/session-timeout',
        name: 'Session Timeout',
        meta: { authRequired: true },
        component: () => import('../views/pages/ui/session-timeout.vue')
    },
    {
        path: '/form/elements',
        name: 'Form Elements',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/elements.vue')
    },
    {
        path: '/form/validation',
        name: 'Form validation',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/validation.vue')
    },
    {
        path: '/form/advanced',
        name: 'Form Advanced',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/advanced.vue')
    },
    {
        path: '/form/editor',
        name: 'CK Editor',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/ckeditor.vue')
    },
    {
        path: '/form/uploads',
        name: 'File Uploads',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/uploads.vue')
    },
    {
        path: '/form/wizard',
        name: 'Form Wizard',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/wizard.vue')
    },
    {
        path: '/form/mask',
        name: 'Form Mask',
        meta: { authRequired: true },
        component: () => import('../views/pages/forms/mask.vue')
    },
    {
        path: '/tables/basic',
        name: 'Basic Tables',
        meta: { authRequired: true },
        component: () => import('../views/pages/tables/basictable.vue')
    },
    {
        path: '/tables/advanced',
        name: 'Advanced Tables',
        meta: { authRequired: true },
        component: () => import('../views/pages/tables/advancedtable.vue')
    },
    {
        path: '/charts/apex',
        name: 'Apex chart',
        meta: { authRequired: true },
        component: () => import('../views/pages/charts/apex.vue')
    },
    {
        path: '/charts/echart',
        name: 'Echart chart',
        meta: { authRequired: true },
        component: () => import('../views/pages/charts/echart/index.vue')
    },
    {
        path: '/maps/google',
        name: 'Google Maps',
        meta: { authRequired: true },
        component: () => import('../views/pages/maps/google.vue')
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'Not Found',
        meta: {
            authRequired: false,
        },
        component: () => import('../views/pages/website/404.vue') 
    },
];
