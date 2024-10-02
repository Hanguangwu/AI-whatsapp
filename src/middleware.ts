import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
// Optionally, you can include a list of public routes
// publicRoutes: ['/sign-in', '/public-page'],
});

export const config = {
matcher: [
'/((?!.\..|_next).)', // Exclude static files and Next.js internal paths
'/', // Include the homepage
'/(api|trpc)(.)' // Include API routes
],
};


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
// // const isPublicRoute = createRouteMatcher(['/'])

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect()
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }
