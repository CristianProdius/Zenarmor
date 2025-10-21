import Tag from "@/components/Tag";
import opnsenseIcon from "@/assets/images/opnsense-logo.svg";
import pfsenseIcon from "@/assets/images/pfsense-logo.svg";
import freebsdIcon from "@/assets/images/freebsd-logo.svg";
import windowsIcon from "@/assets/images/windows-logo.svg";
import ubuntuIcon from "@/assets/images/ubuntu-logo.svg";
import macosIcon from "@/assets/images/macos-logo.svg";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    { name: "OPNsense", icon: opnsenseIcon, description: "Open-source firewall with advanced packet inspection and web filtering." },
    { name: "pfSense", icon: pfsenseIcon, description: "FreeBSD-based firewall with comprehensive network security features." },
    { name: "FreeBSD", icon: freebsdIcon, description: "Enterprise-grade Unix platform for network security deployments." },
    { name: "Windows", icon: windowsIcon, description: "Deploy on Windows Server and desktop environments with full endpoint protection." },
    { name: "Ubuntu Linux", icon: ubuntuIcon, description: "Cloud-native security for Ubuntu servers and workstations." },
    { name: "macOS", icon: macosIcon, description: "Advanced network security for Apple enterprise environments." },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Platform Compatibility</Tag>
                        <h2 className="text-6xl font-medium mt-6 text-brand-navy">
                            Deploy <span className="text-brand-mustard">anywhere</span>
                        </h2>
                        <p className="text-neutral-600 mt-4 text-lg">
                            Zenarmor delivers powerful, cloud-based network security across firewalls, servers, and endpoints. Our advanced packet inspection technology ensures maximum protection with minimal overhead, wherever you need it.
                        </p>
                    </div>

                    <div>
                        <div className="grid md:grid-cols-2 gap-4 h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex" reverse />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
