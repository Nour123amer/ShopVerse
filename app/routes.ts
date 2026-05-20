import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout.tsx",
        [
              index("routes/home.tsx"),
    route("about","./routes/about.tsx"),
    route("contact","./routes/contact.tsx"),
    route("new-arrivals","./routes/new-arrivals.tsx"),
    route("collections","./routes/collections.tsx")
        ]
    )
  
] satisfies RouteConfig;
