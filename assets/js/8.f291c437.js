(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{273:function(t,e,r){"use strict";r.r(e);var o=r(13),a=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"history-and-evolution-of-software-defined-netowrking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history-and-evolution-of-software-defined-netowrking"}},[t._v("#")]),t._v(" History and Evolution of Software Defined Netowrking")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#history-and-evolution-of-software-defined-netowrking"}},[t._v("History and Evolution of Software Defined Netowrking")]),e("ul",[e("li",[e("a",{attrs:{href:"#evolution-of-supporting-technologies"}},[t._v("Evolution of supporting technologies")])]),e("li",[e("a",{attrs:{href:"#central-network-control"}},[t._v("Central Network Control")]),e("ul",[e("li",[e("a",{attrs:{href:"#benefits-of-central-control"}},[t._v("Benefits of Central Control")])])])]),e("li",[e("a",{attrs:{href:"#programmability-in-networks"}},[t._v("Programmability in networks")]),e("ul",[e("li",[e("a",{attrs:{href:"#motivation-for-active-networks"}},[t._v("Motivation for Active Networks")])]),e("li",[e("a",{attrs:{href:"#user-pulls-and-technology-push"}},[t._v('User "Pulls" and Technology "Push"')])]),e("li",[e("a",{attrs:{href:"#two-different-approaches-to-active-networks"}},[t._v("Two Different Approaches to Active Networks")])]),e("li",[e("a",{attrs:{href:"#what-happened"}},[t._v("What happened?")])]),e("li",[e("a",{attrs:{href:"#the-legacy-of-active-networks-for-sdn"}},[t._v("The Legacy of Active Networks for SDN")])])])]),e("li",[e("a",{attrs:{href:"#network-virtualization"}},[t._v("Network Virtualization")]),e("ul",[e("li",[e("a",{attrs:{href:"#benefits-of-network-virtualization"}},[t._v("Benefits of Network Virtualization")])]),e("li",[e("a",{attrs:{href:"#three-examples-of-virtual-networks"}},[t._v("Three Examples of Virtual Networks")]),e("ul",[e("li",[e("a",{attrs:{href:"#the-tempest-architecture-switchlets"}},[t._v("The Tempest Architecture: Switchlets")])]),e("li",[e("a",{attrs:{href:"#vini-virtual-network-infrastructure"}},[t._v("VINI: Virtual Network Infrastructure")])]),e("li",[e("a",{attrs:{href:"#concurrent-architectures-are-better-than-one"}},[t._v("Concurrent Architectures are Better than one")])])])]),e("li",[e("a",{attrs:{href:"#summary"}},[t._v("Summary")])])])]),e("li",[e("a",{attrs:{href:"#from-forces-to-ethane-control-plane-evolution"}},[t._v("From FORCES to Ethane: Control Plane Evolution")]),e("ul",[e("li",[e("a",{attrs:{href:"#why-separate-control"}},[t._v("Why Separate Control?")])]),e("li",[e("a",{attrs:{href:"#custom-control-ietf-forces-2003"}},[t._v("Custom Control: IETF FORCES (2003)")])]),e("li",[e("a",{attrs:{href:"#routing-control-platform-2004"}},[t._v("Routing Control Platform (2004)")])]),e("li",[e("a",{attrs:{href:"#customized-hardware-ethane-2007"}},[t._v("Customized Hardware: Ethane (2007)")])]),e("li",[e("a",{attrs:{href:"#open-hardware-openflow-2008"}},[t._v("Open Hardware: OpenFlow (2008)")])]),e("li",[e("a",{attrs:{href:"#what-have-we-learned-about-control"}},[t._v("What have we learned about control?")])])])]),e("li",[e("a",{attrs:{href:"#the-road-to-sdn"}},[t._v("The Road to SDN")]),e("ul",[e("li",[e("a",{attrs:{href:"#active-networking"}},[t._v("Active Networking")]),e("ul",[e("li",[e("a",{attrs:{href:"#intellectual-contributions"}},[t._v("Intellectual Contributions")])]),e("li",[e("a",{attrs:{href:"#myths"}},[t._v("Myths")])])])]),e("li",[e("a",{attrs:{href:"#control-data-separation"}},[t._v("Control/Data Separation")]),e("ul",[e("li",[e("a",{attrs:{href:"#intellectual-contributions"}},[t._v("Intellectual Contributions")])]),e("li",[e("a",{attrs:{href:"#myths"}},[t._v("Myths")])])])]),e("li",[e("a",{attrs:{href:"#openflow"}},[t._v("OpenFlow")])]),e("li",[e("a",{attrs:{href:"#intellectual-contributions"}},[t._v("Intellectual Contributions")])]),e("li",[e("a",{attrs:{href:"#myths"}},[t._v("Myths")])]),e("li",[e("a",{attrs:{href:"#lessons"}},[t._v("Lessons")])])])])])])])]),e("p"),t._v(" "),e("blockquote",[e("p",[t._v("Key Terms")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Software Defined Networking (SDN):")]),t._v(" A new networking paradigm whereby the behavior of a network is controlled by a single high-level software program. The general term for network architectures whereby the control plane (software that controls network behavior) and the data plane (the devices that forward traffic) are separate from one another.")]),t._v(" "),e("li",[e("strong",[t._v("Control plane:")]),t._v(" The functions in the network that control the behavior of the network (e.g., network paths, forwarding behavior). Typically, the control plane is instantiated as a single, high-level software controller.")]),t._v(" "),e("li",[e("strong",[t._v("Data plane:")]),t._v(" The functions in the network that are responsible for forwarding (or not forwarding) traffic. Typically, the data plane is instantiated as forwarding tables in routers, switches, firewalls, and middleboxes.")]),t._v(" "),e("li",[e("strong",[t._v("Active networks:")]),t._v(" A collection of network architecture projects in the 1990s that shared many of the same goals as software-defined networking.")]),t._v(" "),e("li",[e("strong",[t._v("Network virtualization:")]),t._v(" The notion of instantiating many distinct logical networks on top of a single, shared physical network infrastructure.")])])]),t._v(" "),e("h2",{attrs:{id:"evolution-of-supporting-technologies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evolution-of-supporting-technologies"}},[t._v("#")]),t._v(" Evolution of supporting technologies")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Central Network Control")]),t._v(": AT&T's network control point (1980s)\n"),e("ul",[e("li",[t._v("In-band signaling\n"),e("ul",[e("li",[t._v("Data and control sent over same channel")]),t._v(" "),e("li",[t._v("Certain frequencies (e.g., 2600Hz) could reset phone trunk lines, route calls")])])]),t._v(" "),e("li",[t._v("Resulting network was brittle 脆弱, insecure 不可靠, etc.")])])]),t._v(" "),e("li",[e("strong",[t._v("Programmability in networks")]),t._v(": Active networks (1990s)")]),t._v(" "),e("li",[e("strong",[t._v("Network virtualization")]),t._v(": Switchlets, XEN, VINI (1990s)")])]),t._v(" "),e("h2",{attrs:{id:"central-network-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#central-network-control"}},[t._v("#")]),t._v(" Central Network Control")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Network Control Point")]),t._v(", separating data and control planes\n"),e("ul",[e("li",[t._v("Telephone network")]),t._v(" "),e("li",[t._v("Signaling at NCP")]),t._v(" "),e("li",[t._v("Benefits\n"),e("ul",[e("li",[t._v("Elimination of in-band signaling reduces expenditures\n"),e("ul",[e("li",[t._v("Shorter circuit holding time")]),t._v(" "),e("li",[t._v("Ability to determine busy/idle status before requesting a circuit")])])]),t._v(" "),e("li",[t._v("Rapid introduction of new services\n"),e("ul",[e("li",[t._v("In the area of new services that can be supported, the possibilities are only limited by imagination")])])])])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("一个是消除带内信号减少了支出。因为他们更好地了解了网络内部发生的事情，他们能够缩短特定电路被阻塞的时间。更具体地说，在请求电路或干线之前确定电路或干线的繁忙或闲置状态的能力允许更高效、更快地分配资源。")])]),t._v(" "),e("ul",[e("li",[t._v("Apps from Composing Basic Primitives\n"),e("ul",[e("li",[t._v("Collect N digits")]),t._v(" "),e("li",[t._v("Send a message to the NCP")]),t._v(" "),e("li",[t._v("Make a billing record")]),t._v(" "),e("li",[t._v("...")])])])]),t._v(" "),e("h3",{attrs:{id:"benefits-of-central-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-central-control"}},[t._v("#")]),t._v(" Benefits of Central Control")]),t._v(" "),e("ul",[e("li",[t._v("Network-wide vantage point\n"),e("ul",[e("li",[t._v("Can directly observe (rather than infer) network-wide behavior")])])]),t._v(" "),e("li",[t._v("Independent evolution of infrastructure, data, and services\n"),e("ul",[e("li",[t._v("Services and resource allocation decisions can be made based on customer data, network load, etc.")])])])]),t._v(" "),e("h2",{attrs:{id:"programmability-in-networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programmability-in-networks"}},[t._v("#")]),t._v(" Programmability in networks")]),t._v(" "),e("ul",[e("li",[t._v("Networks where switches perform custom computations on packets")]),t._v(" "),e("li",[t._v("Examples (and motivation)\n"),e("ul",[e("li",[t._v("Trace program running at each router")]),t._v(" "),e("li",[t._v("Middleboxes: firewalls, proxies, application services")])])]),t._v(" "),e("li",[t._v("Identified problems with today's networks\n"),e("ul",[e("li",[t._v("Difficulty of integrating new technology")]),t._v(" "),e("li",[t._v("Poor performance due to redundant 冗余 operations at several protocol layers")]),t._v(" "),e("li",[t._v("Difficulty accommodating new services")])])])]),t._v(" "),e("h3",{attrs:{id:"motivation-for-active-networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation-for-active-networks"}},[t._v("#")]),t._v(" Motivation for Active Networks")]),t._v(" "),e("ul",[e("li",[t._v("Accelerating innovation\n"),e("ul",[e("li",[t._v("Internet innovation relies on consensus")]),t._v(" "),e("li",[t._v("Takes ten years from prototype to deployment (standardization, procurement 购买, deployment)")])])]),t._v(" "),e("li",[t._v("Active nodes allow routers to download new services into the infrastructure\n"),e("ul",[e("li",[t._v("User-driver innovation")])])])]),t._v(" "),e("h3",{attrs:{id:"user-pulls-and-technology-push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-pulls-and-technology-push"}},[t._v("#")]),t._v(' User "Pulls" and Technology "Push"')]),t._v(" "),e("ul",[e("li",[t._v("User Pull (demand)\n"),e("ul",[e("li",[t._v("Proliferation 激增 of firewalls, proxies, transcoders, etc.")]),t._v(" "),e("li",[t._v("Goal: Replace ad hoc approaches")])])]),t._v(" "),e("li",[t._v("Technology Push (enablers)\n"),e("ul",[e("li",[t._v("Safe execution of mobile code, Java applets")]),t._v(" "),e("li",[t._v("OS support\n"),e("ul",[e("li",[t._v("Scout: real-time communications")]),t._v(" "),e("li",[t._v("Exokernel: safe access to low-level resources")]),t._v(" "),e("li",[t._v("SPIN: trustworthy code generation")])])])])])]),t._v(" "),e("h3",{attrs:{id:"two-different-approaches-to-active-networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#two-different-approaches-to-active-networks"}},[t._v("#")]),t._v(" Two Different Approaches to Active Networks")]),t._v(" "),e("ul",[e("li",[e("p",[t._v('Capsules ("integrated")')]),t._v(" "),e("ul",[e("li",[t._v("Every message is a program. Active nodes evaluate content carried in packets.")]),t._v(" "),e("li",[t._v("Code dispatched 发送 to execution environment")])]),t._v(" "),e("img",{attrs:{alt:"capsules",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-25 at 21.36.30.png"}})]),t._v(" "),e("li",[e("p",[t._v('Programmable Switches ("discrete 分离")')]),t._v(" "),e("ul",[e("li",[t._v("Custom processing functions run on the routers")]),t._v(" "),e("li",[t._v("Packets are routed through programmable nodes")]),t._v(" "),e("li",[t._v("Program depends on the packet header")])])])]),t._v(" "),e("h3",{attrs:{id:"what-happened"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-happened"}},[t._v("#")]),t._v(" What happened?")]),t._v(" "),e("ul",[e("li",[t._v("Timing was off\n"),e("ul",[e("li",[t._v("No clear application")]),t._v(" "),e("li",[t._v("Hareware support wasn't cheap -- everyone was using ASICs, whereas now TCAMs, FPGAs, NPUs")])])]),t._v(" "),e("li",[t._v("Some missteps\n"),e("ul",[e("li",[t._v("Security, special languages for safe code, packets carrying code")]),t._v(" "),e("li",[t._v("End user as programmer (vs. network operator)")]),t._v(" "),e("li",[t._v("Interoperability (the ability of computer systems or software to exchange and make use of information)")])])]),t._v(" "),e("li",[t._v("In contrast: OpenFlow did a good job grappling 努力对付 with backwards compatible with switch hardware\n"),e("ul",[e("li",[t._v("Simple firmware upgrade")]),t._v(" "),e("li",[t._v("Switch hardware already support the basics")])])])]),t._v(" "),e("h3",{attrs:{id:"the-legacy-of-active-networks-for-sdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-legacy-of-active-networks-for-sdn"}},[t._v("#")]),t._v(" The Legacy of Active Networks for SDN")]),t._v(" "),e("ul",[e("li",[t._v("Programmable functions in network to enable innovation")]),t._v(" "),e("li",[t._v("Demultiplexing programs on packet headers\n"),e("ul",[e("li",[t._v("Planetlab, Flowvisor, GENI, etc. all use this")])])]),t._v(" "),e("li",[t._v("Paying attention to middleboxes and how these functions are composed")])]),t._v(" "),e("h2",{attrs:{id:"network-virtualization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-virtualization"}},[t._v("#")]),t._v(" Network Virtualization")]),t._v(" "),e("ul",[e("li",[t._v("Representation of one or more logical network topologies on the same infrastructure")]),t._v(" "),e("li",[t._v("Many different instantiations\n"),e("ul",[e("li",[t._v("Virtual LANs (VLANs)")]),t._v(" "),e("li",[t._v("Various technologies and network testbeds")]),t._v(" "),e("li",[t._v("TOday: VMWare, Nicer, etc.")])])])]),t._v(" "),e("h3",{attrs:{id:"benefits-of-network-virtualization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-network-virtualization"}},[t._v("#")]),t._v(" Benefits of Network Virtualization")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Sharing")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Multiple logical routers on a single platform")])]),t._v(" "),e("li",[e("p",[t._v("Resource isolation in CPU, memory, bandwidth, forwarding tables, ...")])])])]),t._v(" "),e("li",[e("p",[t._v("Customizability")]),t._v(" "),e("ul",[e("li",[t._v("Customizable routing and forwarding software")]),t._v(" "),e("li",[t._v("General-purpose CPUs for the control plane")]),t._v(" "),e("li",[t._v("Network processors and FPGAs for data plane")])])])]),t._v(" "),e("h3",{attrs:{id:"three-examples-of-virtual-networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#three-examples-of-virtual-networks"}},[t._v("#")]),t._v(" Three Examples of Virtual Networks")]),t._v(" "),e("ul",[e("li",[t._v("Tempest: Switchlets (1998)\n"),e("ul",[e("li",[t._v("Separation of control framework from switches")]),t._v(" "),e("li",[t._v("Virtualization of the switch")])])]),t._v(" "),e("li",[t._v("VINI: A Virtual Network Infrastructure (2006)\n"),e("ul",[e("li",[t._v("Virtualization of the network infrastructure -> experimenters could run experiments with their own logical networks shared on the same underlying physical topology")])])]),t._v(" "),e("li",[t._v("Cabo: Separates infrastructure, services (2007)\n"),e("ul",[e("li",[t._v("Use some of the vision of the emerging virtual network technologies to realize that virtual networks could allow service providers to operate independently of the providers that make the underlying physical network infrastructure available")])])])]),t._v(" "),e("h4",{attrs:{id:"the-tempest-architecture-switchlets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-tempest-architecture-switchlets"}},[t._v("#")]),t._v(" The Tempest Architecture: Switchlets")]),t._v(" "),e("img",{attrs:{src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-30 at 17.41.39.png"}}),t._v(" "),e("ul",[e("li",[t._v("Multiple control architectures over ATM")]),t._v(" "),e("li",[t._v("Separation of switch controller and fabric via open signaling")]),t._v(" "),e("li",[t._v("Partitioning of switch resources across controllers")])]),t._v(" "),e("img",{attrs:{src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-30 at 18.02.24.png"}}),t._v(" "),e("ul",[e("li",[t._v("Partitions port space, bandwidth, buffers")]),t._v(" "),e("li",[t._v("Different controllers control each switchlet")])]),t._v(" "),e("blockquote",[e("p",[t._v("As anyone who can obtain a virtual network will effectively be a network operator, we hope to see an increase in the creativity that can be brought to bear upon the problem of network control. We have demonstrated that the Tempest framework provides this flexibility while permitting comparable efficiency to current solutions.")])]),t._v(" "),e("h4",{attrs:{id:"vini-virtual-network-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vini-virtual-network-infrastructure"}},[t._v("#")]),t._v(" VINI: Virtual Network Infrastructure")]),t._v(" "),e("p",[t._v('<img alt="Bridge" src="he gap between "lab experiments" and live experiments at scale](https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-30 at 18.07.24.png">')]),t._v(" "),e("center",[t._v('Bridge the gap between "lab experiments" and live experiments at scale')]),t._v(" "),e("ul",[e("li",[t._v("Runs real routing software")]),t._v(" "),e("li",[t._v("Exposes realistic network conditions")]),t._v(" "),e("li",[t._v("Gives control over network events")]),t._v(" "),e("li",[t._v("Carries traffic on behalf of real users")]),t._v(" "),e("li",[t._v("Shared among many experiments")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("p",[t._v("XORP: Control Plane")]),t._v(" "),e("ul",[e("li",[t._v("Goal: run real routing protocols on virtual network topologies")])])]),t._v(" "),e("li",[e("p",[t._v("Click: Data Plane")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Performance")]),t._v(" "),e("ul",[e("li",[t._v("Avoid UML overhead")]),t._v(" "),e("li",[t._v("Move to kernel, FPGA")])])]),t._v(" "),e("li",[e("p",[t._v("Interfaces -> tunnels")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Click UDP tunnels")]),t._v(" "),e("p",[t._v("correspond to UML network interfaces")])])])]),t._v(" "),e("li",[e("p",[t._v("Filters")]),t._v(" "),e("ul",[e("li",[t._v('"Fail a link" by blocking packets at tunnel')])])])])])]),t._v(" "),e("img",{attrs:{alt:"Click Data Plane",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-30 at 18.15.15.png"}}),t._v(" "),e("h4",{attrs:{id:"concurrent-architectures-are-better-than-one"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-architectures-are-better-than-one"}},[t._v("#")]),t._v(" Concurrent Architectures are Better than one")]),t._v(" "),e("ul",[e("li",[t._v("Infrastructure providers: Maintain routers, links, data centers, and other physical infrastructure")]),t._v(" "),e("li",[t._v("Service providers: Offer end-to-end services (e.g., layer 3 VPNs, SLAs, etc.) to users")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("Examples in Communications Networks\n"),e("ul",[e("li",[t._v("Two commercial examples in IP networks\n"),e("ul",[e("li",[t._v("Packet Fabric: share routers at exchange points")]),t._v(" "),e("li",[t._v("FON: resells users' wireless Internet connectivity")])])]),t._v(" "),e("li",[t._v("FON economic refactoring\n"),e("ul",[e("li",[t._v("Infrastructure providers: Buy upstream connectivity")]),t._v(" "),e("li",[t._v("Service provider: FON as the broker")])])])])])]),t._v(" "),e("h3",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("ul",[e("li",[t._v("What is network virtualization?\n"),e("ul",[e("li",[t._v("Separate logical network from the infrastructure")])])]),t._v(" "),e("li",[t._v("What is the history?\n"),e("ul",[e("li",[t._v("Virtual switches (1990s: Switchlets), networks (2006: VINI), services (2007: Cabo)")])])]),t._v(" "),e("li",[t._v("What is the legacy of SDN?\n"),e("ul",[e("li",[t._v("Separate service from infrastructure")]),t._v(" "),e("li",[t._v("Multiple controllers of a single switch")]),t._v(" "),e("li",[t._v("Logical network topologies")])])])]),t._v(" "),e("h2",{attrs:{id:"from-forces-to-ethane-control-plane-evolution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-forces-to-ethane-control-plane-evolution"}},[t._v("#")]),t._v(" From FORCES to Ethane: Control Plane Evolution")]),t._v(" "),e("ul",[e("li",[t._v("Control of Packet-Switched Networks")]),t._v(" "),e("li",[t._v("Why separate control?")]),t._v(" "),e("li",[t._v("How to control a packet-switched network?\n"),e("ul",[e("li",[t._v("Separate control channel: FORCES (2003)")]),t._v(" "),e("li",[t._v("In-band protocols: Routing Control Platform (2004)")]),t._v(" "),e("li",[t._v("Open hardware: Ethane (2007), OpenFlow (2008)")])])])]),t._v(" "),e("h3",{attrs:{id:"why-separate-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-separate-control"}},[t._v("#")]),t._v(" Why Separate Control?")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("More rapid innovation")]),t._v(": Control logic is not tied to hardware")]),t._v(" "),e("li",[e("strong",[t._v("Network-wide view")]),t._v(": Easier to infer (and reason about) network behavior")]),t._v(" "),e("li",[e("strong",[t._v("More flexibility")]),t._v(": Can introduce new services more easily")])]),t._v(" "),e("h3",{attrs:{id:"custom-control-ietf-forces-2003"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-control-ietf-forces-2003"}},[t._v("#")]),t._v(" Custom Control: IETF FORCES (2003)")]),t._v(" "),e("p",[t._v("Forwarding and Control Element Separation (ForCES)")]),t._v(" "),e("ul",[e("li",[t._v("First RFC in 2003, three implementations")]),t._v(" "),e("li",[t._v("Protocols for multiple control elements (CE) and forwarding elements (FE)")])]),t._v(" "),e("p",[t._v("Problem: Requires standardization, adoption, deployment of new hardware (same problem observed by previous work)")]),t._v(" "),e("h3",{attrs:{id:"routing-control-platform-2004"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routing-control-platform-2004"}},[t._v("#")]),t._v(" Routing Control Platform (2004)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Computes routes on behalf of routers")])]),t._v(" "),e("li",[e("p",[t._v("Uses existing routing protocol (BGP) to communicate routes to routers")])])]),t._v(" "),e("img",{attrs:{alt:"Routing Control Platform",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-31 at 11.34.32.png"}}),t._v(" "),e("ul",[e("li",[t._v("Using In-Band Protocols for Control\n"),e("ul",[e("li",[t._v("deployment easier since it doesn't require standardization on a new set of control protocols")])])])]),t._v(" "),e("img",{attrs:{alt:"Using In-Band Protocols for Control",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-31 at 11.36.55.png"}}),t._v(" "),e("p",[t._v("Problem: Control is constrained by what existing protocols can support")]),t._v(" "),e("h3",{attrs:{id:"customized-hardware-ethane-2007"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customized-hardware-ethane-2007"}},[t._v("#")]),t._v(" Customized Hardware: Ethane (2007)")]),t._v(" "),e("ul",[e("li",[t._v("Network architecture for the enterprise\n"),e("ul",[e("li",[t._v("Direct enforcement of a single, fine-grained network policy")])])]),t._v(" "),e("li",[t._v("Domain controller computes flow table entries based on access control policies")]),t._v(" "),e("li",[t._v("Custom switches:\n"),e("ul",[e("li",[t._v("OpenWrt, NetFPGA, Linux")])])])]),t._v(" "),e("p",[t._v("Problem: Requires custom switches that support Ethane")]),t._v(" "),e("h3",{attrs:{id:"open-hardware-openflow-2008"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-hardware-openflow-2008"}},[t._v("#")]),t._v(" Open Hardware: OpenFlow (2008)")]),t._v(" "),e("ul",[e("li",[t._v("Layer two forwarding table (flow table entries)")]),t._v(" "),e("li",[t._v("Switch exposes flow table though simple OpenFlow protocol\n"),e("ul",[e("li",[t._v("Keep it simple")]),t._v(" "),e("li",[t._v("Vendor can keep platform closed, but expose an open interface to control forwarding table")])])])]),t._v(" "),e("img",{attrs:{alt:"OpenFlow",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-31 at 17.33.38.png"}}),t._v(" "),e("img",{attrs:{alt:"Header",src:"https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/Screen Shot 2022-07-31 at 17.35.02.png"}}),t._v(" "),e("h3",{attrs:{id:"what-have-we-learned-about-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-have-we-learned-about-control"}},[t._v("#")]),t._v(" What have we learned about control?")]),t._v(" "),e("ul",[e("li",[t._v("Control and data plane should be decoupled\n"),e("ul",[e("li",[t._v("Vertically integrated switches make introducing new control planes difficult (FORCES)")])])]),t._v(" "),e("li",[t._v("Using existing protocols makes deployment easier, but constrains what can be done (RCP)")]),t._v(" "),e("li",[t._v("Open hardware allows decoupling of control, can spur adoption (OpenFlow)")])]),t._v(" "),e("h2",{attrs:{id:"the-road-to-sdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-road-to-sdn"}},[t._v("#")]),t._v(" The Road to SDN")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Active Networking")]),t._v(": Programmable networks")]),t._v(" "),e("li",[e("strong",[t._v("Control and Data Plane Separation")]),t._v(": Open interfaces between control and data planes")]),t._v(" "),e("li",[e("strong",[t._v("OpenFlow API and Network Ones")]),t._v(": First instance of widespread adoption of an open interface")])]),t._v(" "),e("h3",{attrs:{id:"active-networking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-networking"}},[t._v("#")]),t._v(" Active Networking")]),t._v(" "),e("ul",[e("li",[t._v("More diverse applications and greater use\n"),e("ul",[e("li",[t._v("Reasearchers wanted to deploy new ideas")]),t._v(" "),e("li",[t._v("First attempt to make networks programmable")])])]),t._v(" "),e("li",[e("strong",[t._v("Technology push")]),t._v(": Reduction in computing costs, Funding agency interest")]),t._v(" "),e("li",[e("strong",[t._v("Use Pulls")]),t._v(": Operator frustration with deployment challenges")])]),t._v(" "),e("h4",{attrs:{id:"intellectual-contributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intellectual-contributions"}},[t._v("#")]),t._v(" Intellectual Contributions")]),t._v(" "),e("ul",[e("li",[t._v("Programmable functions in the network")]),t._v(" "),e("li",[t._v("Network virtualization")]),t._v(" "),e("li",[t._v("Demultiplexing to software programms")]),t._v(" "),e("li",[t._v("Vision of a unified architecture for middle box orchestration 精心策划")])]),t._v(" "),e("h4",{attrs:{id:"myths"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myths"}},[t._v("#")]),t._v(" Myths")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Myth")]),t._v("错误观念: End-user would program packets\n"),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": This programming model would be rare")])])]),t._v(" "),e("li",[e("strong",[t._v("Myth")]),t._v(": Packets must carry Java code\n"),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": Active networking had a programmable router/switch model")])])])]),t._v(" "),e("h3",{attrs:{id:"control-data-separation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#control-data-separation"}},[t._v("#")]),t._v(" Control/Data Separation")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Pragrmatism")]),t._v("实用主义 (narrower scope)\n"),e("ul",[e("li",[t._v("Attempt to solve traffic engineering problems")])])]),t._v(" "),e("li",[e("strong",[t._v("Technology push")]),t._v(": Open interfaces between control and data planes (e.g., ForCES), logically centralized control (e.g., RCP)")]),t._v(" "),e("li",[e("strong",[t._v("Use pull")]),t._v(": Pressing network management problems")])]),t._v(" "),e("h4",{attrs:{id:"intellectual-contributions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intellectual-contributions-2"}},[t._v("#")]),t._v(" Intellectual Contributions")]),t._v(" "),e("ul",[e("li",[t._v("Logically centralized control using an open interface to routers and switches")]),t._v(" "),e("li",[t._v("Distributed state management (of controllers)")])]),t._v(" "),e("h4",{attrs:{id:"myths-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myths-2"}},[t._v("#")]),t._v(" Myths")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Myth")]),t._v(": Logically centralized route control violates 违反 fate sharing\n"),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": Conventional distributed routing solutions already violated these principles (e.g., OSPF areas, BGP route reflectors)\n"),e("ul",[e("li",[t._v("Separation allowed researchers to think about cleaner ways to do distributed state management")])])])])])]),t._v(" "),e("h3",{attrs:{id:"openflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openflow"}},[t._v("#")]),t._v(" OpenFlow")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Generality")]),t._v("一般性: More functions than earlier route controllers, building on switch hardware\n"),e("ul",[e("li",[t._v("More limited flexibility, but immediate deployability")])])]),t._v(" "),e("li",[e("strong",[t._v("Technology push")]),t._v(': "Perfect storm" between operators, vendors, chipset 芯片组 designers, and researchers')]),t._v(" "),e("li",[e("strong",[t._v("Use pull")]),t._v(": Initially campuses, then data centers")])]),t._v(" "),e("h3",{attrs:{id:"intellectual-contributions-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intellectual-contributions-3"}},[t._v("#")]),t._v(" Intellectual Contributions")]),t._v(" "),e("ul",[e("li",[t._v("Generalizing network devices and functions")]),t._v(" "),e("li",[t._v("The vision of a network operating system\n"),e("ul",[e("li",[t._v("Data plane with open API")]),t._v(" "),e("li",[t._v("State management layer")]),t._v(" "),e("li",[t._v("Control logic")])])]),t._v(" "),e("li",[t._v("Distributed state management techniques")])]),t._v(" "),e("h3",{attrs:{id:"myths-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myths-3"}},[t._v("#")]),t._v(" Myths")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Myth")]),t._v(": First packet must go to the controller")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": No assumptions about granularity of rules or whether the controller handles traffic")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Myth")]),t._v(": Controller must be physically centralized")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": Deployments have distributed controllers")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Myth")]),t._v(": SDN is OpenFlow")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Reality")]),t._v(": OpenFlow is an instantiation of SDN")])])])]),t._v(" "),e("h3",{attrs:{id:"lessons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lessons"}},[t._v("#")]),t._v(" Lessons")]),t._v(" "),e("ul",[e("li",[t._v("Balance between vision and programtism")]),t._v(" "),e("li",[t._v('OpenFlow "tool off" in part because of a balance between vision and support from existing hardware')]),t._v(" "),e("li",[t._v("The balance remains tenuous 脆弱的\n"),e("ul",[e("li",[t._v("Commodity servers")]),t._v(" "),e("li",[t._v("Programmable hardware")])])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);