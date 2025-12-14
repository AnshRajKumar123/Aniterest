import React, { useEffect, useState } from 'react'
import '../ComponentCSS/Navbar.css'
import '../ComponentCSS/SearchPop.css'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Eternity } from '../../public/assets/assest'

const Navbar = () => {

    const { isSignedIn } = useUser();
    const navigate = useNavigate()
    const { openSignIn } = useClerk()
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [query, setQuery] = useState("");

    const suggestions = [
        { text: "Flower", path: "/explore/flower_img" },
        { text: "Anime", path: "/explore/main_anime_img" },
        { text: "Dark Wallpaper", path: "/explore/dark_wallpaper" },
        { text: "Desktop Wallpaper", path: "/explore/desktop_wallpaper" },
        { text: "Nature", path: "/explore/nature" },
        { text: "Cars", path: "/explore/cars_wallpaer" },
        { text: "Sketch Art", path: "/explore/sketch" },
        { text: "Prefect World", path: "/explore/perfect_world_img" },
        { text: "Saturo Gojo", path: "/explore/gojo_img" },
        { text: "Throne of Seal", path: "/explore/throne_of_seal_img" },
        { text: "Ryomen Sukuna", path: "/explore/sukuna_img" },
        { text: "Demon Slayer", path: "/explore/demon_slayer_img" },
        { text: "Soul Land 2", path: "/explore/soul_land_2_img" },
        { text: "Hunter X Hunter", path: "/explore/hunter_X_hunter_img" },
        { text: "Little Fairy Doctor", path: "/explore/little_fairy_doctor_img" },
        { text: "Kamado Tanjiro", path: "/explore/tanjiro_img" },
        { text: "Kamado Nezuko", path: "/explore/nezuko_img" },
        { text: "Wang Ling", path: "/explore/wang_ling_img" },
        { text: "Renegade Immortal", path: "/explore/renegade_immortal_img" },
        { text: "Solo Leveling", path: "/explore/solo_leveling_img" },
        { text: "Battle through the heaven", path: "/explore/btth_img" },
        { text: "btth", path: "/explore/btth_img" },
        { text: "One Piece", path: "/explore/one_piece_img" },
        { text: "Naurto", path: "/explore/naurto_img" },
        { text: "Girls Fashion", path: "/explore/girlsfashion" },
        { text: "Free Fire", path: "/explore/freefire_wallpaper" },
        { text: "Boys Fashion", path: "/explore/boysfashion" },
        { text: "Zenitsu", path: "/explore/zenitsu_img" },
        { text: "Zenitsu Agatsuma", path: "/explore/zenitsu_img" },
    ];

    const filtered = suggestions.filter(s =>
        s.text.toLowerCase().includes(query.toLowerCase())
    );

    const handleEnter = (e) => {
        if (e.key === "Enter" && filtered.length > 0) {
            navigate(filtered[0].path);
            setIsSearchVisible(false);
        }
    };

    const suggestionText = query && filtered.length > 0 ? filtered[0].text : "";

    useEffect(() => {
        document.body.style.overflow = isSearchVisible ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isSearchVisible]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault(); // stop browser default
                setIsSearchVisible((prev) => !prev); // 🔄 toggle open/close
            }

            // Escape to close
            if (e.key === "Escape") {
                setIsSearchVisible(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <nav className="NavbarSet">
                <Link to='/' className="FirstLineSet">
                    <h1>Aniterest</h1>
                </Link>
                <div className="ThirdLineSet">
                    <div className="OptionsBtn">
                        <div className="InsideOptions">
                            <span>Options</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <div className="SecondLineSet">
                            <div className='InsideSecondLine'>
                                <Link to='/'>Home</Link>
                                <Link to='/collection'>Collection</Link>
                                <Link to='/explore'>Explore</Link>
                                <Link to='/about'>About Us</Link>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setIsSearchVisible(true)} className="SearchOnClick">
                        <i className="ri-search-line"></i>
                    </div>

                    <div className="TripleDot">
                        <button className="InsideTripleDot">
                            <i className="ri-more-2-fill"></i>
                        </button>
                        <div className="UpInsideTriple">
                            <div className='HoverTripleDot'>
                                <div>
                                    <i className="ri-customer-service-2-line"></i>
                                    <span>24 X 7 Customer Service</span>
                                </div>
                                <div>
                                    <i className="ri-line-chart-line"></i>
                                    <span>Advertise</span>
                                </div>
                                <div>
                                    <i className="ri-notification-2-line"></i>
                                    <span>Notification</span>
                                </div>
                                <div>
                                    <i className="ri-download-2-line"></i>
                                    <span>Download App</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        !isSignedIn ? (
                            <button onClick={openSignIn} className='LoginBtn'>Login</button>
                        ) : (
                            <UserButton appearance={{ elements: { avatarBox: { width: "40px", height: "40px" } } }}>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        label='My Collection'
                                        labelIcon={<i className='ri-collage-fill'></i>}
                                        onClick={() => navigate('/collection')}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        )
                    }
                </div>
            </nav>

            {isSearchVisible && (
                <div className="BigSearchPopUp" onClick={() => setIsSearchVisible(false)}>
                    <div className="InsideSearchPopUp" onClick={(e) => e.stopPropagation()}>
                        <h1>Search in Aniterest</h1>

                        <div className="InputZIcon" style={{ position: "relative" }}>
                            <i className="ri-search-line"></i>

                            <div className="search-wrapper">
                                {query.length > 0 &&
                                    filtered.length > 0 &&
                                    query.toLowerCase() !== suggestionText.toLowerCase() && (
                                        <div className="ghost-text">
                                            <span className="ghost-suggestion">
                                                {suggestionText.slice(query.length)}
                                            </span>
                                        </div>
                                    )}
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleEnter}
                                    placeholder=''
                                    autoFocus
                                    className='InputOPlace'
                                />
                            </div>

                            <span className='KeyBoardStyle'><p>⌘</p>K</span>
                        </div>

                        <h2>Similar Search Suggestion !</h2>
                        <div className='SuggestionBox'>
                            {query.length === 0 ? (
                                // show first 7 suggestions when input is empty
                                suggestions.slice(0, 7).map((s, i) => (
                                    <div
                                        key={i}
                                        className="BoxSugg"
                                        onClick={() => {
                                            navigate(s.path);
                                            setIsSearchVisible(false);
                                        }}
                                    >
                                        <span>{s.text}</span>
                                        <i className="ri-search-eye-line"></i>
                                    </div>
                                ))
                            ) : filtered.length > 0 ? (
                                // show only filtered when input has text
                                filtered.map((s, i) => (
                                    <div
                                        key={i}
                                        className="BoxSugg"
                                        onClick={() => {
                                            navigate(s.path);
                                            setIsSearchVisible(false);
                                        }}
                                    >
                                        <span>{s.text}</span>
                                        <i className="ri-search-eye-line"></i>
                                    </div>
                                ))
                            ) : (
                                <p className="NoResult">No results found</p>
                            )}
                        </div>

                        {/* ✅ keep your Collection section unchanged */}
                        <h2>Collection !</h2>
                        <div className="CollectionBoxSearch">
                            <div onClick={() => { navigate('/explore/sketch'); setIsSearchVisible(false); }} className="ImageBoxADescri">
                                <div className="CollBoxSe">
                                    <img src={Eternity.SearchBarColl1} className='Bogbox1' />
                                    <div className="TwoImgInline">
                                        <img src={Eternity.SearchBarColl2} />
                                        <img src={Eternity.SearchBarColl3} />
                                    </div>
                                </div>
                                <div className="Description">
                                    <span>Art Wallpaper</span>
                                    <p>70+ Photos</p>
                                </div>
                            </div>
                            <div onClick={() => { navigate('/explore/cars_wallpaer'); setIsSearchVisible(false); }} className="ImageBoxADescri">
                                <div className="CollBoxSe">
                                    <img src={Eternity.SearchBarColl4} className='Bogbox1' />
                                    <div className="TwoImgInline">
                                        <img src={Eternity.SearchBarColl5} />
                                        <img src={Eternity.SearchBarColl6} />
                                    </div>
                                </div>
                                <div className="Description">
                                    <span>Cars Wallpaper</span>
                                    <p>99+ Photos</p>
                                </div>
                            </div>
                            <div onClick={() => { navigate('/explore/flower_img'); setIsSearchVisible(false); }} className="ImageBoxADescri">
                                <div className="CollBoxSe">
                                    <img src={Eternity.SearchBarColl7} className='Bogbox1' />
                                    <div className="TwoImgInline">
                                        <img src={Eternity.SearchBarColl8} />
                                        <img src={Eternity.SearchBarColl9} />
                                    </div>
                                </div>
                                <div className="Description">
                                    <span>Blue Flowers</span>
                                    <p>60+ Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Navbar