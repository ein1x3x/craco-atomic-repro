import { createRoute, createHistoryRouter } from 'atomic-router';

import { RouterProvider, Link, Route } from 'atomic-router-react';

import { createBrowserHistory } from 'history';

import { createRoot } from 'react-dom/client';

const home = createRoute();

const profile = createRoute();

const router = createHistoryRouter({
  routes: [
    {
      path: '/',

      route: home
    },

    {
      path: '/profile',

      route: profile
    }
  ]
});

router.setHistory(createBrowserHistory());

const root = createRoot(document.getElementById('root')!);

const Home = () => <div>Home</div>;

const Profile = () => <div>Profile</div>;

root.render(
  <RouterProvider router={router}>
    <div>
      <Link to={home}>Home</Link>

      <Link to={profile}>Profile</Link>
    </div>

    <div>
      <Route view={Home} route={home} />
      <Route view={Profile} route={profile} />
    </div>
  </RouterProvider>
);
