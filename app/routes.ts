import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/AuthLayout.tsx",[
        route("sign-in","./routes/sign-in.tsx"),
         route("sign-up","./routes/sign-up.tsx"),
         route("verify-otp","./routes/verify-otp.tsx"),
                  route("reset-password","./routes/reset-password.tsx")


    ]),
    layout("./layouts/MainLayout.tsx",
        [
              index("routes/home.tsx"),
    route("about","./routes/about.tsx"),
    route("shop","./routes/shop.tsx"),
    route("contact","./routes/contact.tsx"),
    route("new-arrivals","./routes/new-arrivals.tsx"),
    route("collections","./routes/collections.tsx")
    
        ]
    )
  
] satisfies RouteConfig;
