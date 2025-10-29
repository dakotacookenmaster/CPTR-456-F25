import { useState } from "react";

interface BoxProps {
    width: string;
    height: string;
    onClick: () => void;
}


export function Box(props: BoxProps) {
    const { width, height, onClick } = props
    const [color, setColor] = useState({
        red: 0,
        green: 0,
        blue: 0
    })

    function handleClick() {
        setColor(prevColor => {
            if (prevColor.red < 255) {
                return {
                    ...prevColor,
                    red: prevColor.red + 5
                }
            } else if (prevColor.green < 255) {
                return {
                    ...prevColor,
                    green: prevColor.green + 5
                }
            } else {
                return {
                    ...prevColor,
                    blue: prevColor.blue + 5
                }
            }
        })
    }

    return (
        <div
            style={{
                width: width,
                height: height,
                border: "2px solid black",
                backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`
            }}

            onClick={handleClick}
        ></div>
    )
}