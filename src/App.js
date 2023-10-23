import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import PageLoader from './components/elements/PageLoader';

// import Home from './pages/home';

// import Tutoring from './pages/tutoring';

// import Worksheet from './pages/Worksheets';
// import Bookcover from './pages/Worksheets/bookcover/Bookcover';
// import Material from './pages/Worksheets/material/Material';
// import Solution from './pages/Worksheets/solution/Solution';

// import About from './pages/about';
// import BlogPost from './pages/blog/BlogPost';
// import PostDetail from './pages/blog/post-detail/PostDetail';

// import Support from './pages/support/Support';
// import Lectures from './pages/lectures/Lectures';

// import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
// import Terms from './pages/terms/Terms';
// import ThankYou from './pages/thankYou/ThankYou';
// import NotFound from './pages/not-found/NotFound';

const Home = lazy(() => import('./pages/home'));
const Tutoring = lazy(() => import('./pages/tutoring'));

const Worksheet = lazy(() => import('./pages/Worksheets'));
const Bookcover = lazy(() => import('./pages/Worksheets/bookcover/Bookcover'));
const Material = lazy(() => import('./pages/Worksheets/material/Material'));
const Solution = lazy(() => import('./pages/Worksheets/solution/Solution'));

const About = lazy(() => import('./pages/about'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const PostDetail = lazy(() => import('./pages/blog/post-detail/PostDetail'));

const Support = lazy(() => import('./pages/support/Support'));
const Lectures = lazy(() => import('./pages/lectures/Lectures'));

const PrivacyPolicy = lazy(() => import('./pages/privacy-policy/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/terms/Terms'));
const ThankYou = lazy(() => import('./pages/thankYou/ThankYou'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            { index: true, element: <Home /> },
            { path: 'tutoring', element: <Tutoring /> },
            { path: 'about', element: <About /> },
            { path: 'blog', element: <BlogPost /> },
            { path: 'blog/:postId', element: <PostDetail /> },
            { path: 'worksheets', element: <Worksheet /> },
            { path: 'worksheets/:bookName', element: <Bookcover /> },
            { path: 'worksheets/:bookName/:chapterName/:materialName', element: <Material /> },
            {
                path: 'worksheets/:bookName/:chapterName/:materialName/:questionId',
                element: <Solution />,
            },
            {
                path: 'worksheets/:bookName/:chapterName/:materialName/lectures/:topicId',
                element: <Lectures />,
            },

            { path: 'support', element: <Support /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-of-use', element: <Terms /> },
            { path: 'thankyou', element: <ThankYou /> },

            //SEO pages with repetitive componenets
            { path: 'math-tutoring', element: <Home /> },
            { path: 'trigonometry-math-tutoring', element: <Home /> },
            { path: 'algebra-math-tutoring', element: <Home /> },
        ],
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<PageLoader />}>
                <NotFound />
            </Suspense>
        ),
    },
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
