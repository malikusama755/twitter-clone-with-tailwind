import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
    <div className="flex md:container mx-auto my-4">
        <div className="first w-16 md:w-[70%]">

            <div className="sidebar flex md:items-end  flex-col sticky top-0">
                <div className="logo invert my-4 self-start mx-2 md:mx-16">

                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                        <g>
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </g>
                    </svg>

                </div>
                <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> home </span> <span
                            className="hidden md:block">Home</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> search </span><span
                            className="hidden md:block">Explore</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> notifications </span><span
                            className="hidden md:block">Notifications</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> message </span><span
                            className="hidden md:block">Grok</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> lists </span><span
                            className="hidden md:block">Lists</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> bookmarks </span><span
                            className="hidden md:block">Bookmarks</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> Group </span><span
                            className="hidden md:block">Communities</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> box </span><span
                            className="hidden md:block">Premium</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> person </span><span
                            className="hidden md:block">Profile</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> pending </span><span
                            className="hidden md:block">More</span>
                    </li>
                    <li>
                        <div className="button w-full text-center my-4">
                            <button
                                className="hidden md:block bg-[#1d9bf0] px-20 text-xl rounded-full py-3 text-white">Post</button>
                            <button
                                className="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                    </li>
                </ul>

                <div className="userprofile w-full mt-10  justify-end mx-10 hidden md:flex">
                    <div
                        className="item p-3 items-center gap-5 justify-end mx-5 flex   hover:bg-gray-800 cursor-pointer rounded-full w-fit">

                        <div className="p1"><img className="w-12 h-12"
                                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                                alt="vercel" /></div>
                        <div className="p2 ">
                            <div>Usama Farooq</div>
                            <div className="text-gray-500">@Mallik</div>
                        </div>
                        <div className="p3 text-2xl">
                            ...
                        </div>


                    </div>
                </div>

            </div>


        </div>
        <div className="second w-full border-[1px] border-x-gray-600 border-y-black ">
            <div className="top flex p-3 bg-black backdrop-blur-3xl opacity-80">
                <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
                <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
                <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
                <div className="settings mx-2"><span className="material-symbols-outlined">
                        settings
                    </span></div>
            </div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <div className="whatishapp flex gap-4 my-3">
                <div className="img m-2 w-16">

                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt=""/>
                </div>
                <div className="w-full">
                    <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text"
                        placeholder="What is happening?!"/>
                    <div className="text-blue-400 flex items-center gap-1 w-full my-4">
                        <span className="material-symbols-outlined ">
                            globe_asia
                        </span>
                        <span className="font-bold">Everyone can reply</span>
                    </div>
                    <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
                    <div className="flex justify-between">

                        <div className="blueicons flex gap-2 text-blue-400 items-center">
                            <span className="material-symbols-outlined cursor-pointer">
                                image
                            </span>
                            <span className="material-symbols-outlined cursor-pointer">
                                gif
                            </span>
                            <span className="material-symbols-outlined cursor-pointer">
                                ballot
                            </span>
                            <span className="material-symbols-outlined cursor-pointer">
                                sentiment_satisfied
                            </span>
                            <span className="material-symbols-outlined cursor-pointer">
                                calendar_month
                            </span>
                            <span className="material-symbols-outlined cursor-pointer">
                                pin_drop
                            </span>
                        </div>
                        <div className="postbtn">
                            <button
                                className="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold">Post</button>
                        </div>

                    </div>
                </div>

            </div>


            <div className="posts">
                <div className="post border-[1px] border-y-gray-600 border-x-0  ">
                    <div className="flex">
                        <div className="image m-4">
                            <img className="w-16"
                                src="https://pbs.twimg.com/profile_images/1697299503198646273/GTnwCVUC_x96.jpg" alt="Elon Musk"/>
                        </div>
                        <div className="content my-3">
                            <span className="font-bold hover:underline cursor-pointer text-white">Elon Musk</span> <span
                                className="text-gray-500">@ElonMusk · 6h </span>
                            <div className="postimg m-2 ml-0"> I spent $44 billion for this app and now Lizard boy just
                                decided to hit copy and paste.

                                It’s personal now.

                                See you in the cage, Zuck.
                            </div>
                            <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chat_bubble
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        repeat
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        Favorite
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        bar_chart
                                    </span> 1k
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="post">
                    <div className="flex">
                        <div className="image m-4">
                            <img className="w-16"
                                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                                alt=""/>
                        </div>
                        <div className="content my-3">
                            <span className="font-bold hover:underline cursor-pointer text-white">Mallik</span> <span
                                className="text-gray-500">@Mallik · 6h </span>
                            <div>Living legend</div>
                            <div className="postimg m-4 ml-0">
                                <img className="rounded-xl"
                                    src="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900" alt=""/>
                            </div>
                            <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chat_bubble
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        repeat
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        Favorite
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        bar_chart
                                    </span> 1k
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="post">
                    <div className="flex">
                        <div className="image m-4">
                            <img className="w-8"
                                src="https://pbs.twimg.com/profile_images/1724504100136439808/J8k8HnSD_bigger.png"
                                alt=""/>
                        </div>
                        <div className="content my-3">
                            <span className="font-bold hover:underline cursor-pointer text-white"> non aesthetic
                                things</span> <span className="text-gray-500">@CodeMeme · 6h </span>
                            <div>This is amazing coding meme</div>
                            <div className="postimg m-4 ml-0">
                                <img className="rounded-xl w-full"
                                    src="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/works-doesnt-work.jpg"
                                    alt=""/>
                            </div>
                            <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chat_bubble
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        repeat
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        Favorite
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        bar_chart
                                    </span> 1k
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="post">
                    <div className="flex">
                        <div className="image m-4">
                            <img className="w-16"
                                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                                alt=""/>
                        </div>
                        <div className="content my-3">
                            <span className="font-bold hover:underline cursor-pointer text-white"> non aesthetic
                                things</span> <span className="text-gray-500">@PicturesFoIder · 6h </span>
                            <div>legend</div>
                            <div className="postimg m-4 ml-0">
                                <img className="rounded-xl"
                                    src="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900" alt=""/>
                            </div>
                            <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chat_bubble
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        repeat
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        Favorite
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        bar_chart
                                    </span> 1k
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="third w-full bg-red-5044 hidden md:block">

            <div
                className="search rounded-full w-[50%] bg-[#16181c] text-white m-3 focus-within:ring-2 focus-within:ring-[#00ffcc] focus-within:shadow-[0_0_10px_#00ffcc] transition">
                <div className="flex items-center justify-center flex-nowrap">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" className="w-[70%] rounded-full bg-[#16181c] text-white px-4 py-2 outline-none"
                        placeholder="Search"/>
                </div>
            </div>


            <div className="whats m-3 bg-[#16181c] w-[100%] py-5 rounded-xl space-y-3">
                <h1 className="text-xl font-bold px-3">Whats Happening</h1>
                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                    <div className="text-sm text-gray-200">Trending in Pakistan</div>
                    <div className="font-bold">#Chahat Fateh Ali</div>
                    <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>

                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                    <div className="text-sm text-gray-200">Trending in Pakistan</div>
                    <div className="font-bold">#Malik</div>
                    <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>

                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                    <div className="text-sm text-gray-200">Trending in Pakistan</div>
                    <div className="font-bold">#Jeto Pakistan</div>
                    <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>

                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                    <div className="text-sm text-gray-200">Trending in Pakistan</div>
                    <div className="font-bold">#Mallik</div>
                    <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>
            </div>


            <div className="who m-3 bg-[#16181c] w-[100%] py-5 rounded-xl space-y-1">
                <h1 className="text-xl font-bold px-3">Who To Follow</h1>


                <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div className="flex gap-1">

                        <div className="p1"><img className="rounded-full w-14 h-14"
                                src="https://pbs.twimg.com/profile_images/1879013694367252480/Gxa-Pspq_bigger.jpg"
                                alt="Bill Gates"/></div>
                        <div className="p2 ">
                            <div>Bill Gates</div>
                            <div className="text-gray-500">@BillGates</div>
                        </div>
                    </div>

                    <div className="p3">
                        <button className="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div className="flex gap-1">

                        <div className="p1"><img className="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg"
                                alt="Donald J.Trump"/></div>
                        <div className="p2 ">
                            <div>Donald J.Trump</div>
                            <div className="text-gray-500">@realDonaldTrump</div>
                        </div>
                    </div>

                    <div className="p3">
                        <button className="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div className="flex gap-1">

                        <div className="p1"><img className="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/1692077157512785920/z9C1zW17_bigger.jpg"
                                alt="bcci"/></div>
                        <div className="p2 ">
                            <div>BCCI</div>
                            <div className="text-gray-500">@BCCI</div>
                        </div>
                    </div>

                    <div className="p3">
                        <button className="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div className="text-blue-600 px-3 cursor-pointer hover:underline my-5">Show More</div>
            </div>

            <div className="terms relative m-3 text-xs text-gray-500 px-3 w-[70%] py-5 space-y-1 mt-5">
                <span className="hover:underline cursor-pointer mr-2">Terms of Service</span>
                <span className="hover:underline cursor-pointer mr-2">Privacy Policy</span>
                <span className="hover:underline cursor-pointer mr-2">Cookie Policy</span>
                <span className="hover:underline cursor-pointer mr-2">Accessibility</span>
                <span className="hover:underline cursor-pointer mr-2">Ads info</span>
                <span className="hover:underline cursor-pointer mr-2">More</span>
                <span className="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
