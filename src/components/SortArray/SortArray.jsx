import { React, useState } from "react";
import { Link } from "react-router";

const SortArray = () => {
    const products = [
        { name: "Apple" },
        { name: "Apple" },
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" },
        { name: "Pineapple" },
        { name: "Strawberry" },
        { name: "Blueberry" },
        { name: "Mango" },
        { name: "Watermelon" },
        { name: "Grapes" },
        { name: "Cherry" },
        { name: "Peach" },
        { name: "Pear" },
        { name: "Kiwi" },
        { name: "Lemon" },
        { name: "Lime" },
        { name: "Coconut" },
        { name: "Papaya" },
        { name: "Guava" },
        { name: "Dragonfruit" },
        { name: "Apricot" },
        { name: "Fig" },
        { name: "Pomegranate" },
        { name: "Melon" },
    ];
    const [value, setValue] = useState("");
    const [arr, setArr] = useState(products);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSearch = () => {
        if (!value.trim()) {
            setArr(products);
        } else {
            setArr(
                arr.filter(
                    (el) => el.name.toLowerCase() === value.trim().toLowerCase()
                )
            );
        }
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "5px",
                }}
            >
                {arr.map((el, i) => (
                    <p key={i}>{el.name}</p>
                ))}
            </div>
            <Link to="/">Go Back To Main Page</Link>
        </>
    );
};

export default SortArray;
