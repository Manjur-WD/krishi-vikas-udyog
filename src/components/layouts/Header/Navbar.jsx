import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import tractor_drop from "../../../assets/images/trac-drop.jpg";

const Navbar = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem >
                        <NavigationMenuTrigger >Item One</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black">
                            <div className="md:w-[400px] flex items-center">
                                <img src={tractor_drop} alt="this is tractor dropdown image" className="w-1/2" />
                                <NavigationMenuLink>buy new tractor</NavigationMenuLink>
                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export default Navbar
