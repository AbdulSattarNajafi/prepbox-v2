import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home';
import Tutoring from './pages/tutoring';

import Worksheet from './pages/Worksheets';
import Bookcover from './pages/Worksheets/bookcover/Bookcover';
import Material from './pages/Worksheets/material/Material';
import Solution from './pages/Worksheets/solution/Solution';

import About from './pages/about';
import Blog from './pages/blog';
import PostDetail from './pages/blog/post-detail/PostDetail';

import Support from './pages/support/Support';
import Lectures from './pages/lectures/Lectures';

import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import Terms from './pages/terms/Terms';
import ThankYou from './pages/thankYou/ThankYou';
import PageNotFound from './pages/not-found';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            { index: true, element: <Home /> },
            { path: 'tutoring', element: <Tutoring /> },
            { path: 'about', element: <About /> },
            { path: 'blog', element: <Blog /> },
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

            //SEO pages with repetitive componenets
            { path: 'math-tutoring', element: <Home /> },
            { path: 'trigonometry-math-tutoring', element: <Home /> },
            { path: 'algebra-math-tutoring', element: <Home /> },

            //one-off pages
            { path: 'thankyou', element: <ThankYou /> },
        ],
    },
    { path: '*', element: <PageNotFound /> },
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
