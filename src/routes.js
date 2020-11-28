import React from 'react';

// Root Include
// const Root = React.lazy(() => import('./pages/Home/indexRoot'));
const PageContactDetail = React.lazy(() => import('./pages/Pages/Contact/PageContactDetail'));

//Special
const PageComingSoon = React.lazy(() => import('./pages/Pages/Special/PageComingSoon'));
const PageComingSoon2 = React.lazy(() => import('./pages/Pages/Special/page-comingsoon2'));
const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));
const PageMaintenance = React.lazy(() => import('./pages/Pages/Special/PageMaintenance'));
const Payments = React.lazy(() => import('./pages/Payments/index'));

//User Pages
const PageLogin = React.lazy(() => import('./pages/User/Login'));
const PageCoverLogin = React.lazy(() => import('./pages/Pages/User/PageCoverLogin'));
const PageCoverRePassword = React.lazy(() => import('./pages/Pages/User/PageCoverRePassword'));
const PageCoverSignup = React.lazy(() => import('./pages/Pages/User/PageCoverSignup'));
const PageRecoveryPassword = React.lazy(() => import('./pages/Pages/User/PageRecoveryPassword'));
const PageSignup = React.lazy(() => import('./pages/Pages/User/PageSignup'));

// Import all components
// const SaasOnepage = React.lazy(() => import('./pages/Saas Onepage/index'));
const Event = React.lazy(() => import('./pages/Conferences/index'));
const Home = React.lazy(() => import('./pages/Home/index'));
// const Home = React.lazy(() => import('./pages/Home/indexMain'));


//Docs
const ChangeLog = React.lazy(() => import('./pages/Docs/ChangeLog'));
const Components = React.lazy(() => import('./pages/Docs/Components'));
const Documentation = React.lazy(() => import('./pages/Docs/Documentation'));
const Widget = React.lazy(() => import('./pages/Docs/widget'));

const PageAboutUs = React.lazy(() => import('./pages/Pages/PageAboutUs'));
const PagePricing = React.lazy(() => import('./pages/Pages/PagePricing'));
const PageServices = React.lazy(() => import('./pages/Pages/PageServices'));
const PageTeam = React.lazy(() => import('./pages/Pages/PageTeam'));

//Account
const PageProfile = React.lazy(() => import('./pages/Pages/Account/page-profile'));
const PageProfileEdit = React.lazy(() => import('./pages/Pages/Account/page-profile-edit'));
const PageInvoice = React.lazy(() => import('./pages/Pages/Account/page-invoice'));

//Career
const PageJobsSidebar = React.lazy(() => import('./pages/Pages/Careers/page-jobs-sidebar'));
const PageJobDetail = React.lazy(() => import('./pages/Pages/Careers/page-job-detail'));
const PageJob = React.lazy(() => import('./pages/Pages/Careers/PageJob'));
const PageJobApply = React.lazy(() => import('./pages/Pages/Careers/page-job-apply'));
const PageJobCompany = React.lazy(() => import('./pages/Pages/Careers/page-job-company'));
const PageJobCandidate = React.lazy(() => import('./pages/Pages/Careers/page-job-candidate'));

//Blog
const PageBlog = React.lazy(() => import('./pages/Pages/Blog/PageBlog'));
const PageBlogDetail = React.lazy(() => import('./pages/Pages/Blog/PageBlogDetail'));
const PageBlogSidebar = React.lazy(() => import('./pages/Pages/Blog/PageBlogSidebar'));

//Work
const PageWork = React.lazy(() => import('./pages/Pages/Work/PageWork'));
const PageWorkDetail = React.lazy(() => import('./pages/Pages/Work/PageWorkDetail'));

//Utility
const PagePrivacy = React.lazy(() => import('./pages/Pages/Utility/PagePrivacy'));
const PageTerms = React.lazy(() => import('./pages/Pages/Utility/PageTerms'));

//Contact
const PageContactOne = React.lazy(() => import('./pages/Pages/Contact/PageContactOne'));
const PageContactThree = React.lazy(() => import('./pages/Pages/Contact/PageContactThree'));
const PageContactTwo = React.lazy(() => import('./pages/Pages/Contact/PageContactTwo'));

const ForgotPassword = React.lazy(() => import('./pages/User/ForgotPassword'));

//Attendee Account
const AttendeeAccount = React.lazy(() => import('./pages/AuthApp/Attendee/Account/Profile'));
const AttendeeEvents = React.lazy(() => import('./pages/AuthApp/Attendee/Events/EventList'));
const AttendeeSelectedEvent = React.lazy(() => import('./pages/AuthApp/Attendee/Events/SelectedEvent/Index'));
const AttendeeEventSessions = React.lazy(() => import('./pages/AuthApp/Attendee/Events/SelectedEvent/Sessions/Index'));



const routes = [
    //routes without Layout

    //Contct withour layout
    { path: '/page-contact-detail', component: PageContactDetail, isWithoutLayout : true },

    //Special Pages
    { path: '/page-comingsoon', component: PageComingSoon, isWithoutLayout : true },
    { path: '/page-comingsoon2', component: PageComingSoon2, isWithoutLayout : true },
    { path: '/page-error', component: PageError, isWithoutLayout : true },
    { path: '/page-maintenance', component: PageMaintenance, isWithoutLayout : true },

    //User Pages
    { path: '/login', component: PageLogin, isWithoutLayout : true },
    { path: '/user/login', component: PageLogin, isWithoutLayout : true },
    { path: '/signup', component: PageSignup, isWithoutLayout : true },
    { path: '/page-cover-login', component: PageCoverLogin, isWithoutLayout : true },
    { path: '/page-recovery-password', component: PageRecoveryPassword, isWithoutLayout : true },
    { path: '/page-cover-re-password', component: PageCoverRePassword, isWithoutLayout : true},
    { path: '/page-cover-signup', component: PageCoverSignup, isWithoutLayout : true },


    { path: '/account', component: AttendeeAccount, auth: true },
    { path: '/account/events', component: AttendeeEvents, auth: true },
    { path: '/account/events/:id', component: AttendeeSelectedEvent, auth: true, sidebar: true  },
    { path: '/account/events/:id/sessions', component: AttendeeEventSessions, auth: true, sidebar: true  },



    { path: '/forgot-password', component: ForgotPassword },

    
    { path: '/index-payments', component: Payments },
    { path: '/index-event', component: Event },
    { path: '/event/:id', component: Event },
    { path: '/app/events/', component: Event },


    { path: '/page-aboutus', component: PageAboutUs },
    { path: '/page-pricing', component: PagePricing },
    { path: '/page-services', component: PageServices },
    { path: '/page-team', component: PageTeam },

    //Utility
    { path: '/page-terms', component: PageTerms },
    { path: '/page-privacy', component: PagePrivacy },

    //Page Work
    { path: '/page-work', component: PageWork },
    { path: '/page-work-detail', component: PageWorkDetail },

    //Page Profile
    { path: '/page-profile', component: PageProfile },
    { path: '/page-profile-edit', component: PageProfileEdit },
    { path: '/page-invoice', component: PageInvoice },

    //Page Job
    { path: '/page-job', component: PageJob },
    { path: '/page-job-apply', component: PageJobApply },
    { path: '/page-job-detail', component: PageJobDetail },
    { path: '/page-jobs-sidebar', component: PageJobsSidebar },
    { path: '/page-job-company', component: PageJobCompany },
    { path: '/page-job-candidate', component: PageJobCandidate },

    //Page Blog
    { path: '/page-blog', component: PageBlog },
    { path: '/page-blog-detail', component: PageBlogDetail },
    { path: '/page-blog-sidebar', component: PageBlogSidebar },

    //Page Contact
    { path: '/page-contact-one', component: PageContactOne },
    { path: '/page-contact-three', component: PageContactThree },
    { path: '/page-contact-two', component: PageContactTwo },

    //Docs
    { path: '/changelog', component: ChangeLog },
    { path: '/components', component: Components },
    { path: '/documentation', component: Documentation },
    { path: '/widget', component: Widget },
    
    //Root
    { path: '/', component: Home },


];

export default routes;