(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7481)}])},7850:function(e,t,s){"use strict";var a=s(6992),l={translations:{"zh-HK":s(6097),en:a},defaultLang:"zh-HK",useBrowserDefault:!1};e.exports=l},7481:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var a=s(603),l=s(5893),i=s(9008),r=s.n(i),n=function(e){var t=e.text;return(0,l.jsxs)("div",{className:"flex items-center justify-center md:justify-start max-w-full w-[992px]",children:[(0,l.jsx)("div",{className:"mr-3",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/logo_v7iyqq.svg",alt:"Logo"})}),(0,l.jsx)("h2",{className:"text-darkBlue uppercase text-3xl md:text-5xl font-bold ",children:t})]})},o=s(7039),c=function(){var e=(0,o.$G)().t,t=(0,a.Z)((0,o.cQ)(),1)[0];return console.log("query",t),(0,l.jsx)("div",{id:"about-us",className:"bg-aliceBlue py-28 block",children:(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("div",{className:"container w-full mx-auto flex justify-center",children:(0,l.jsx)(n,{text:e("AboutUs.title")})}),(0,l.jsx)("div",{className:"flex justify-center w-full py-6 md:py-24",children:(0,l.jsx)("p",{className:"text-darkBlue text-lg text-center w-2/3",children:e("AboutUs.content")})})]})})},d=s(7294),x=function(){var e=(0,o.$G)().t,t=((0,a.Z)((0,o.cQ)(),1)[0],(0,d.useState)("")),s=t[0],i=t[1],r=(0,d.useState)(""),c=r[0],x=r[1];return(0,l.jsx)("div",{id:"contact-us",className:"py-20 md:py-28",children:(0,l.jsx)("div",{className:"container mx-auto w-full",children:(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("div",{className:"container w-full mx-auto flex justify-center",children:(0,l.jsx)(n,{text:e("ContactUs.title")})}),(0,l.jsxs)("div",{className:"flex flex-col justify-center px-4 md:px-0 w-full pt-7 md:pb-12 max-w-[992px]",children:[(0,l.jsx)("input",{className:"w-full border-2 border-darkGray px-6 py-4 mb-4",type:"text",placeholder:"Subject",value:s,onChange:function(e){i(e.target.value)}}),(0,l.jsx)("textarea",{className:"w-full border-2 border-darkGray px-6 py-4 h-96 mb-4",placeholder:"Write your email message here...",cols:15,value:c,onChange:function(e){return function(e){e.preventDefault(),x(e.target.value)}(e)}}),(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("a",{className:"bg-blue text-white px-4 py-2",href:"mailto:0xblanc.io@proton.me?subject=".concat(s,"&body=").concat(c),children:"Send"})}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("a",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",href:"https://instagram.com/0xblanc.io",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg",alt:"Instagram",width:24,height:24})}),(0,l.jsx)("a",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",href:"https://t.me/oxblanc",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg",alt:"Telegram",width:24,height:24})})]})]})]})]})})})};function m(){var e=window.innerWidth;return{width:e,height:window.innerHeight,isMobile:e<768}}function h(){var e=(0,d.useState)(m()),t=e[0],s=e[1],a=(0,d.useState)(!1);a[0],a[1];return(0,d.useEffect)((function(){var e=function(){s(m())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var u=function(){var e=h(),t=e.width,s=e.height,a=(0,o.$G)().t,i=(0,d.useState)(!1),r=(i[0],i[1]),c=(0,d.useState)(0),x=c[0],m=c[1];return(0,d.useEffect)((function(){var e=function(){var e=window.pageYOffset,a=document.querySelector(".main"),l=document.getElementById("past-projects"),i=a.offsetTop+l.offsetTop-s/2,n=(e-i)/(a.offsetTop+l.offsetTop-i),o=t>1024?".hs-banner-desktop":".hs-banner-mobile",c=1136*n-1136;document.querySelector(o).style.transform="translateX(".concat(c>0?0:c,"px)");var d=1160*n-1160;document.querySelector(".hs-clash").style.transform="translateY(".concat(d>0?0:d,"px)");var h=1160*n-1160;document.querySelector(".hs-nyc").style.transform="translateY(".concat(h>0?0:h,"px)");var u=612+-612*n;document.querySelector(".hs-nft").style.transform="translateY(".concat(u<0?0:u,"px)");var p=t>1024?".hs-wanted-desktop":".hs-wanted-mobile",g=612+-612*n;document.querySelector(p).style.transform="translateY(".concat(g<0?0:g,"px)");var f=t>1024?".hs-hunger-desktop":".hs-hunger-mobile",v=800+-800*n;document.querySelector(f).style.transform="translateX(".concat(v<0?0:g,"px)");var b=document.querySelectorAll(".project-container p"),j=1.5-.5*n;b.forEach((function(e){e.style.transform="scale(".concat(j<=1?1:j,")")})),r(e<=x),m(e<=0?0:e)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[x]),(0,l.jsx)("div",{id:"past-projects",className:"relative items-center bg-aliceBlue py-28 overflow-hidden",children:(0,l.jsxs)("div",{className:"w-full flex justify-center flex-col h-5/6",children:[(0,l.jsx)("div",{className:"container w-full mx-auto flex justify-center",children:(0,l.jsx)(n,{text:a("ProjectShowcase.title")})}),(0,l.jsx)("div",{className:"flex lg:hidden justify-center mt-20 my-10",children:(0,l.jsx)("img",{className:"hs-banner-mobile w-4/5",src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-banner_rbuv7x.webp",alt:"HS Banner",width:770,height:344})}),(0,l.jsx)("div",{className:"project-container flex flex-col relative justify-center items-center lg:my-80 lg:py-40",children:(0,l.jsxs)("div",{className:"flex flex-col italic text-xl lg:text-3xl text-center text-deepDarkBlue",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"hs-banner-desktop absolute hidden lg:block w-[700px] top-[-375px] left-[-12px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-banner_rbuv7x.webp",width:770,height:344,alt:"HS banner"})}),(0,l.jsxs)("p",{children:["Over ",(0,l.jsx)("span",{className:"text-4xl lg:text-6xl font-bold text-blue",children:"One Million"})," USD on sell"]})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"hs-clash absolute hidden lg:block w-[335px] top-[-306px] right-[-160px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-clash_g9a04i.webp",width:335,height:330,alt:"HS clash"})}),(0,l.jsxs)("p",{children:[(0,l.jsxs)("span",{className:"text-4xl lg:text-6xl font-bold text-purple relative",children:["100 ",(0,l.jsx)("span",{className:"absolute -right-3 top-2 text-4xl",children:"+"})]}),"\xa0 ETH trade volume on OpenSea"]})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"hs-nft absolute hidden lg:block w-[300px] top-[-112px] left-[-340px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758658/website/hs-nft_us4we2.webp",width:300,height:300,alt:"HS nft"})}),(0,l.jsxs)("p",{children:["Collaborate with ",(0,l.jsx)("span",{className:"text-4xl lg:text-6xl font-bold text-blueLagoon",children:"French graffiti artist DEZIO"})]})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"hs-nyc absolute hidden lg:block w-[350px] top-[-12px] right-[-390px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-nyc_dpewwp.webp",width:350,height:350,alt:"HS nyc"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{className:"text-4xl lg:text-6xl font-bold text-redViolet",children:"Chef Nick Family"})," x Hungry Sausages Lab"]})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"hs-hunger-desktop absolute hidden lg:block w-[320px] bottom-[-375px] right-[54px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-hunger_xeyaxu.webp",width:320,height:320,alt:"HS hunger"})}),(0,l.jsx)("div",{className:"hs-wanted-desktop absolute hidden lg:block w-[340px] bottom-[-432px] left-[100px]",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-wanted_sctfre.webp",width:340,height:340,alt:"HS wanted"})}),(0,l.jsxs)("p",{children:["Collaborated event with ",(0,l.jsx)("span",{className:"text-4xl lg:text-6xl font-bold text-orange",children:"Grant Hyatt - CLASH"}),"!"]})]})]})}),(0,l.jsxs)("div",{className:"flex lg:hidden mt-10",children:[(0,l.jsx)("div",{className:"w-1/2 flex pt-10 pb-2 px-2",children:(0,l.jsx)("img",{className:"hs-wanted-mobile",src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-wanted_sctfre.webp",alt:"HS wanted"})}),(0,l.jsx)("div",{className:"w-1/2 flex pt-2 pb-10 px-2",children:(0,l.jsx)("img",{className:"hs-hunger-mobile",src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758660/website/hs-hunger_xeyaxu.webp",alt:"HS hunger"})})]})]})})},p=s(7610),g=function(){var e=(0,o.$G)().t;return(0,l.jsxs)("div",{className:"container mx-auto py-28 xl:px-10",children:[(0,l.jsxs)("div",{className:"w-full justify-center items-center flex flex-col text-center",children:[(0,l.jsxs)("h1",{className:"md:text-3xl text-darkBlue mb-2",children:[e("ImageShowcase.WantSomethingSpecial")," "]}),(0,l.jsx)("h1",{className:"text-3xl md:text-6xl text-darkBlue font-bold mb-8",children:e("ImageShowcase.AIImageProcessedNftGeneration")})]}),(0,l.jsxs)("div",{className:"flex flex-col-reverse md:flex-row mx-auto pt-16",children:[(0,l.jsxs)("div",{className:"flex md:flex-col flex-1 pt-8 lg:pt-24 xl:pl-16 justify-evenly md:justify-start",children:[(0,l.jsxs)("div",{className:"flex flex-col mb-8 lg:mb-16 text-center sm:text-start",children:[(0,l.jsx)("p",{className:"text-xl md:text-2xl lg:text-4xl text-gray",children:"From"}),(0,l.jsx)("p",{className:"text-xl md:text-2xl lg:text-4xl font-bold text-gray",children:"Moonbirds #1555"}),(0,l.jsxs)("p",{className:"text-lightGray text-sm lg:text-base",children:["Source"," ",(0,l.jsx)("a",{className:"underline",href:"https://opensea.io/collection/proof-moonbirds",children:"Opensea@Moonbirds"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col text-center sm:text-start",children:[(0,l.jsx)("p",{className:"text-xl md:text-2xl lg:text-4xl text-gray",children:"To"}),(0,l.jsx)("p",{className:"text-xl md:text-2xl lg:text-4xl font-bold text-gray",children:"AINightbirds MBAI#1555"}),(0,l.jsxs)("p",{className:"text-lightGray text-sm lg:text-base",children:["Source"," ",(0,l.jsx)("a",{className:"underline",href:"https://opensea.io/collection/ainightbirds",children:"Opensea@AINightbirds"})]})]})]}),(0,l.jsx)("div",{className:"flex md:p-12",children:(0,l.jsx)("div",{className:"flex bg-aliceBlue mx-20 md:mx-0 translate-x-10",children:(0,l.jsx)("div",{children:(0,l.jsx)(p.vx,{className:"-translate-y-10 -translate-x-10",changePositionOnHover:!0,itemOne:(0,l.jsx)("img",{alt:"AINightbirds",width:740,height:740,src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758656/website/AINightbirds_sllfw2.webp"}),itemTwo:(0,l.jsx)("img",{alt:"Moonbirds",width:740,height:740,src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758654/website/Moonbirds_x5nlp8.webp"})})})})})]})]})},f=function(e){var t=e.position,s=e.text,a=e.icon,i=e.backgroundColor,r=(0,d.useState)(""),n=r[0],o=r[1],c=(0,d.useState)(""),x=c[0],m=c[1],h=(0,d.useState)(""),u=h[0],p=h[1];return(0,d.useEffect)((function(){"top"===t?(o("rotate-180"),m("rotate-180")):"top-right"===t?(o("-rotate-135"),m("rotate-135")):"right"===t?(o("-rotate-90"),m("rotate-90")):"bottom-right"===t?(o("-rotate-45"),m("rotate-45")):"bottom"===t?(o("rotate-0"),m("rotate-0")):"bottom-left"===t?(o("rotate-45"),m("-rotate-45")):"left"===t?(o("rotate-90"),m("-rotate-90")):"top-left"===t&&(o("rotate-135"),m("-rotate-135")),"serviceNft"===i?p(" bg-gradient-to-tr from-serviceNftBlue to-serviceNftPurple"):"serviceMeta"===i?p(" bg-gradient-to-tr from-serviceMetaBlue to-serviceMetaLightBlue"):"serviceIpfs"===i?p(" bg-gradient-to-tr from-serviceIpfsPurple to-serviceIpfsBlue"):"serviceMinting"===i?p(" bg-gradient-to-tr from-serviceMintingPink to-serviceMintingPurple"):"serviceSmartContract"===i?p(" bg-gradient-to-tr from-serviceSmartContractPurple to-serviceSmartContractRed"):"serviceSolana"===i?p(" bg-gradient-to-tr from-serviceSolanaPurple via-serviceSolanaBlue to-serviceSolanaGreen"):"serviceWeb3"===i?p(" bg-gradient-to-tr from-serviceWeb3Red to-serviceWeb3Orange"):"serviceWeb"===i&&p(" bg-gradient-to-tr from-serviceWebOrange to-serviceWebGreen")}),[t,i]),(0,l.jsx)("div",{className:" left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center",children:(0,l.jsx)("div",{className:n+" relative h-1 w-1 bg-aliceBlue",children:(0,l.jsx)("div",{className:x+" translate-y-64 sm:translate-y-[32rem] -translate-x-1/2 absolute w-40 h-40 md:h-56 md:w-56 rounded-full flex justify-center items-center drop-shadow-xl",children:(0,l.jsxs)("div",{className:u+" rounded-full circled-item-inner w-full h-full flex flex-col justify-center items-center",children:[(0,l.jsx)("div",{className:"flex w-24 md:w-36 mb-2 md:mb-4",children:(0,l.jsx)("img",{src:a,alt:s,width:198,height:157})}),(0,l.jsx)("p",{className:"px-6 md:px-4 text-white text-center text-xs md:text-xl",children:s})]})})})})},v=[{name:"NFT generic propagation",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/nft-generic-propagation_cbm15f.svg",position:"top",backgroundColor:"serviceNft"},{name:"Custom metadata",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/meta_oavy25.svg",position:"top-right",backgroundColor:"serviceMeta"},{name:"IPFS data upload",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/ipfs_dwm3ei.svg",position:"right",backgroundColor:"serviceIpfs"},{name:"Minting website",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/minting_blgiih.svg",position:"bottom-right",backgroundColor:"serviceMinting"},{name:"EVM Smart Contract Service",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/smart-contract_h6rezu.svg",position:"bottom",backgroundColor:"serviceSmartContract"},{name:"Solana related service",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858226/website/services/solana_ikjezd.svg",position:"bottom-left",backgroundColor:"serviceSolana"},{name:"Web 3 integration service",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858228/website/services/web3_aq7mir.svg",position:"left",backgroundColor:"serviceWeb3"},{name:"Traditional web service",icon:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656858228/website/services/web_daqg6x.svg",position:"top-left",backgroundColor:"serviceWeb"}],b=function(){var e=(0,d.useState)(!1),t=(e[0],e[1]),s=(0,d.useState)(0),a=s[0],i=s[1],r=(0,o.$G)().t,n=h().height;return(0,d.useEffect)((function(){var e=function(){var e=window.pageYOffset,s=document.querySelector("#hero"),l=document.querySelector("#service-we-provide"),r=s.offsetHeight+l.offsetTop,o=(e-r)/(l.offsetHeight-n)*360,c=document.querySelector(".rotation-container"),d=document.querySelectorAll(".circled-item-inner");e<=r?o=0:e+n>=r+l.offsetHeight&&(o=360),c.style.transform="rotate(".concat(o,"deg)");var x=!0,m=!1,h=void 0;try{for(var u,p=d[Symbol.iterator]();!(x=(u=p.next()).done);x=!0){u.value.style.transform="rotate(".concat(-o,"deg)")}}catch(g){m=!0,h=g}finally{try{x||null==p.return||p.return()}finally{if(m)throw h}}t(!(e>a)),i(e<=0?0:e)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[a]),(0,l.jsx)("div",{id:"service-we-provide",className:"relative items-center h-[250rem]",children:(0,l.jsxs)("div",{className:"h-screen flex overflow-hidden items-center justify-center sticky flex-col top-0",children:[(0,l.jsx)("div",{className:"h-full flex justify-center items-center -translate-x-60 sm:-translate-x-40",children:(0,l.jsx)("div",{className:"rotation-container h-4/6 aspect-square relative rounded-full",children:v.map((function(e,t){var s=e.name,a=e.icon,i=e.position,r=e.backgroundColor;return(0,l.jsx)(f,{position:i,text:s,icon:a,backgroundColor:r},t)}))})}),(0,l.jsx)("div",{className:"absolute left-0 top-0 w-5/12 sm:w-3/6 h-full sm:bg-white flex items-center",children:(0,l.jsx)("div",{className:"flex justify-end w-full",children:(0,l.jsxs)("div",{className:"flex flex-col items-end translate-x-2 sm:translate-x-24 w-[200px] sm:w-[450px] pl-2 md:pl-0",children:[(0,l.jsx)("div",{className:"self-start mb-6",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg",alt:"Logo",width:340,height:70})}),(0,l.jsx)("h2",{className:"self-start uppercase text-darkBlue font-bold text-2xl sm:text-4xl md:text-7xl",children:r("Services.ServiceWeProvide")})]})})})]})})},j=function(e){var t=e.text,s=e.href,a=e.color,i=void 0===a?"white":a,r=e.padding,n=void 0===r?"py-4 px-8":r;return(0,l.jsx)("a",{className:n,href:s,onMouseEnter:function(e){var t=e.target.querySelector(".actual-text"),s=e.target.querySelector(".shadow-text");(null===t||void 0===t?void 0:t.classList)&&(null===s||void 0===s?void 0:s.classList)&&(t.classList.add("-translate-y-6"),s.classList.remove("translate-y-6"))},onMouseLeave:function(e){var t=e.target.querySelector(".actual-text"),s=e.target.querySelector(".shadow-text");(null===t||void 0===t?void 0:t.classList)&&(null===s||void 0===s?void 0:s.classList)&&(t.classList.remove("-translate-y-6"),s.classList.add("translate-y-6"))},children:(0,l.jsxs)("p",{className:"text-lg uppercase flex flex-col overflow-hidden relative text-".concat(i," whitespace-nowrap"),children:[(0,l.jsx)("span",{className:"actual-text transition-all duration-500",children:t}),(0,l.jsx)("span",{className:"shadow-text absolute top-0 translate-y-6 transition-all duration-500",children:t})]})})},w=[{text:"AboutUs.title",href:"#about-us"},{text:"Services.title",href:"#service-we-provide"},{text:"ProjectShowcase.title",href:"#past-projects"},{text:"ContactUs.title",href:"#contact-us"}],y=function(){var e=(0,o.$G)().t,t=(0,a.Z)((0,o.cQ)(),1)[0];return(0,l.jsxs)("div",{className:"hidden lg:flex h-20 bg-red shadow-md bg-white",children:[(0,l.jsxs)("div",{className:"flex h-full flex-1 pl-6",children:[(0,l.jsx)("a",{href:"https://0xblanc.io",className:"flex h-full px-6 py-6",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg",alt:"logo",width:149,height:32})}),w.map((function(t,s){return(0,l.jsx)("div",{className:"flex h-full",children:(0,l.jsx)(j,{text:e(t.text),href:t.href,color:"darkBlue",padding:"px-4 py-6"})},s)}))]}),(0,l.jsxs)("div",{className:"flex h-full justify-end pr-8",children:[(0,l.jsxs)("div",{className:"flex flex-row space-x-3 items-center text-darkBlue font-bold text-xl mx-5",children:[t&&"zh-HK"===t.lang&&(0,l.jsx)(o.Ww,{lang:"en",children:"En"}),t&&"en"===t.lang&&(0,l.jsx)(o.Ww,{lang:"zh-HK",children:"\u7e41\u4e2d"})]}),(0,l.jsx)("a",{className:"flex items-center px-4 py-6 hover:scale-125 cursor-pointer",href:"mailto:0xblanc.io@proton.me",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/email_toxyaj.svg",alt:"Email",width:24,height:24})}),(0,l.jsx)("a",{className:"flex items-center px-4 py-6 hover:scale-125 cursor-pointer",href:"https://instagram.com/0xblanc.io",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg",alt:"Instagram",width:24,height:24})}),(0,l.jsx)("a",{className:"flex items-center px-4 py-6 hover:scale-125 cursor-pointer",href:"https://t.me/oxblanc",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg",alt:"Telegram",width:24,height:24})})]})]})},N=s(93),_=function(e){e.menuOpen;var t=e.menuToggleHandler,s=((0,o.$G)().t,(0,a.Z)((0,o.cQ)(),1)[0]);return(0,l.jsx)("div",{className:"lg:hidden flex py-1 w-full justify-between bg-white shadow-md h-20",children:(0,l.jsxs)("div",{className:"flex px-6 py-5 w-full items-center justify-evenly",children:[(0,l.jsx)(N.Z,{onClick:t,className:"h-12 mr-4 text-darkBlue"}),(0,l.jsx)("img",{className:"h-8 mr-4 text-darkBlue",src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg",alt:"Logo",onClick:t}),(0,l.jsxs)("div",{className:"text-3xl justify-end text-darkBlue",children:[s&&"zh-HK"===s.lang&&(0,l.jsx)(o.Ww,{lang:"en",children:"En"}),s&&"en"===s.lang&&(0,l.jsx)(o.Ww,{lang:"zh-HK",children:"\u7e41\u4e2d"})]})]})})},S=function(e){var t=e.menuToggleHandler,s=e.menuOpen;return(0,l.jsxs)("div",{className:"flex-col w-full sticky flex top-0 z-50",children:[(0,l.jsx)(y,{}),!s&&(0,l.jsx)(_,{menuOpen:s,menuToggleHandler:t})]})},k=s(1664),q=s.n(k),C=function(){return(0,l.jsx)("div",{className:"flex bg-darkElectricBlue p-2 justify-center",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center bg-darkElectricBlue justify-between max-w-full",style:{width:992},children:[(0,l.jsx)("p",{className:"text-white text-base sm:text-lg",children:"Copyright \xa9 2022 0xBlanc. All rights reserved."}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("p",{className:"text-white text-lg mr-2",children:"Find us on:"}),(0,l.jsxs)("div",{className:"flex flex-row items-center",children:[(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"mailto:0xblanc.io@proton.me",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/email_white_okqc5z.svg",alt:"Email",width:24,height:24})})}),(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"https://instagram.com/0xblanc.io",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_white_gq2wrr.svg",alt:"Instagram",width:24,height:24})})}),(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"https://t.me/oxblanc",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/telegram_white_zhib7w.svg",alt:"Telegram",width:24,height:24})})})]})]})]})})},B=function(e){var t=(0,o.$G)().t;return(0,l.jsx)("div",{id:"hero",className:"h-screen min-h-full w-full bg-hero bg-cover bg-right",children:(0,l.jsxs)("div",{className:"h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-heroBlue to-transparent flex lg:pl-32 md:py-16 flex-col",children:[(0,l.jsxs)("div",{className:"flex-1 flex flex-col justify-center sm:pl-8 sm:px-0 px-5 ",children:[(0,l.jsx)("div",{className:"mx-auto lg:mx-0",children:(0,l.jsx)("img",{className:"mb-4",src:"https://res.cloudinary.com/blanc-io/image/upload/v1656857424/website/text_logo_gold_no01vb.svg",alt:"Logo",width:392,height:82})}),(0,l.jsx)("h1",{className:"text-gold text-4xl font-bold text-center lg:text-start",children:t("Hero.title")})]}),(0,l.jsxs)("div",{className:"flex flex-col pb-4 md:pb-0 px-5 sm:px-0 lg:flex-row items-center",children:[(0,l.jsx)(j,{text:t("AboutUs.title"),href:"#about-us"}),(0,l.jsx)("div",{className:"hidden lg:flex items-center w-[1px]",children:(0,l.jsx)("span",{className:"w-full bg-white h-4"})}),(0,l.jsx)(j,{text:t("Services.title"),href:"#service-we-provide"}),(0,l.jsx)("div",{className:"hidden lg:flex items-center w-[1px]",children:(0,l.jsx)("span",{className:"w-full bg-white h-4"})}),(0,l.jsx)(j,{text:t("ProjectShowcase.title"),href:"#past-projects"}),(0,l.jsx)("div",{className:"hidden lg:flex items-center w-[1px]",children:(0,l.jsx)("span",{className:"w-full bg-white h-4"})}),(0,l.jsx)(j,{text:t("ContactUs.title"),href:"#contact-us"})]})]})})},H=s(8163),E=[{text:"AboutUs.title",href:"#about-us"},{text:"Services.title",href:"#service-we-provide"},{text:"ProjectShowcase.title",href:"#past-projects"},{text:"ContactUs.title",href:"#contact-us"}],I=function(e){var t=e.menuOpen,s=e.menuToggleHandler,i=(0,a.Z)(d.useState(0),2),r=i[0],n=i[1],c=(0,o.$G)().t;(0,a.Z)((0,o.cQ)(),1)[0];return(0,d.useEffect)((function(){n(window.pageYOffset)}),[t]),(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsxs)("div",{id:"mobile-menu",className:"h-screen bg-white z-1000 w-full flex flex-col absolute",style:{top:"".concat(r,"px")},children:[(0,l.jsxs)("div",{className:"flex px-6 py-5 w-full items-center justify-start shadow-lg",children:[(0,l.jsx)(H.Z,{className:"h-12 mr-4 text-darkBlue",onClick:s}),(0,l.jsx)("img",{className:"h-8 mr-4",src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/text_logo_kahw7o.svg",alt:"Logo",onClick:s})]}),(0,l.jsxs)("div",{className:"flex flex-col flex-1 px-6 py-12",children:[(0,l.jsx)("div",{className:"flex-1 flex flex-col font-thin",children:E.map((function(e,t){return(0,l.jsx)("div",{className:"text-3xl mt-5 text-darkBlue",onClick:s,children:(0,l.jsx)(q(),{href:e.href,children:c(e.text)})},t)}))}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between mx-12",children:[(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"mailto:0xblanc.io@proton.me",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/email_toxyaj.svg",alt:"Email",width:24,height:24})})}),(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"https://instagram.com/0xblanc.io",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857806/website/media/instagram_glwsd1.svg",alt:"Instagram",width:24,height:24})})}),(0,l.jsx)("div",{className:"flex items-center px-2 hover:scale-125 cursor-pointer",children:(0,l.jsx)(q(),{href:"https://t.me/oxblanc",children:(0,l.jsx)("img",{src:"https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857867/website/media/telegram_ycwij6.svg",alt:"Telegram",width:24,height:24})})})]})]}),(0,l.jsx)("div",{className:"flex justify-center"})]})})},T=function(e){var t=e.children,s=(0,d.useState)(!1),a=s[0],i=s[1],r=function(){var e=document.body;console.log(e),a?e.classList.remove("overflow-hidden"):e.classList.add("overflow-hidden"),i((function(e){return!e}))};return(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)(B,{}),(0,l.jsxs)("div",{className:"main relative",children:[(0,l.jsx)(S,{menuOpen:a,menuToggleHandler:r}),(0,l.jsx)("div",{children:t})]}),(0,l.jsx)(C,{}),(0,l.jsx)(I,{menuOpen:a,menuToggleHandler:r})]})},L=function(){var e=(0,o.$G)().t;(0,a.Z)((0,o.cQ)(),1)[0];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:e("meta.title")}),(0,l.jsx)("link",{rel:"icon",href:"/logo512.png"}),(0,l.jsx)("meta",{name:"description",content:e("meta.description")}),(0,l.jsx)("meta",{name:"keywords",content:e("meta.keywords")}),(0,l.jsx)("meta",{property:"og:title",content:e("meta.title")}),(0,l.jsx)("meta",{property:"og:image",content:"/assets/logo/text_logo.svg"}),(0,l.jsx)("meta",{property:"og:site_name",content:"0xBlanc"}),(0,l.jsx)("meta",{property:"og:description",content:e("meta.description")}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:url",content:"https://0xblanc.io"}),(0,l.jsx)("meta",{property:"og:locale",content:e("meta.locale")}),(0,l.jsx)("meta",{name:"googlebot",content:"noindex,nofollow"})]}),(0,l.jsx)(T,{children:(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(c,{}),(0,l.jsx)(b,{}),(0,l.jsx)(g,{}),(0,l.jsx)(u,{}),(0,l.jsx)(x,{})]})})]})}},6992:function(e){"use strict";e.exports=JSON.parse('{"meta":{"locale":"en","title":"0xBlanc - Hong Kong based Web3 & Blockchain Solution Provider","description":"Hong Kong based web3 and blockchain solution provider. Want to integrate web3 into your business? Need blockchain-related technical services or consultations like launching NFT projects? Then 0xBlanc.io is the place to be.","keywords":"web3, blockchain, solana, ethereum, nft, technical service, minting site, website hosting, nft hosting, nft generation"},"Hero":{"title":"Unleash the potentiality with Blockchain."},"AboutUs":{"title":"About Us","content":"0xBlanc was founded by a group of young blood passionate about web3 and blockchain technologies. We brought the talents of technicians and designers to provide blockchain-related consultations and services for projects. If you want to launch an NFT project, integrate web3 into an existing business, develop custom logic smart contracts or even host traditional websites, this is the right place to be. Please don\'t hesitate and feel free to contact us!"},"ContactUs":{"title":"Contact Us"},"FAQ":{"title":"FAQ"},"ImageShowcase":{"WantSomethingSpecial":"Want something special?","AIImageProcessedNftGeneration":"AI image processed NFT generation"},"ProjectShowcase":{"title":"PAST PROJECTS"},"Services":{"title":"Services","ServiceWeProvide":"Service We Provide"}}')},6097:function(e){"use strict";e.exports=JSON.parse('{"meta":{"locale":"zh-HK","title":"0xBlanc - \u9999\u6e2f\u7684Web3&\u5340\u584a\u93c8\u89e3\u6c7a\u65b9\u6848\u4f9b\u61c9\u5546","description":"","keywords":"web3, blockchain, solana, ethereum, nft, technical service, minting site, website hosting, nft launching, nft generation, \u5340\u584a\u93c8, \u4ee5\u592a\u574a"},"Hero":{"title":"\u91cb\u653e\u5340\u584a\u93c8\u7684\u6f5b\u529b"},"AboutUs":{"title":"\u95dc\u65bc\u6211\u5011","content":"asd"},"ContactUs":{"title":"\u806f\u7d61\u6211\u5011"},"FAQ":{"title":"\u5e38\u898b\u554f\u984c"},"ImageShowcase":{"WantSomethingSpecial":"\u66f4\u591a\u60f3\u8981\u7684\u6771\u897f\uff1f","AIImageProcessedNftGeneration":"AI\u5716\u7247\u5408\u6210 + NFT\u751f\u6210\u5668"},"ProjectShowcase":{"title":"\u904e\u5f80\u9805\u76ee"},"Services":{"title":"\u670d\u52d9","ServiceWeProvide":"\u6211\u5011\u63d0\u4f9b\u7684\u670d\u52d9"}}')}},function(e){e.O(0,[67,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);