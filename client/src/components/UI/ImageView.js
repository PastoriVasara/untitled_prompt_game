import kai from '../../assets/images/2kai.jpg';
import { motion } from "framer-motion"


const ImageView = () => {
    return (
            <motion.img
                style = {{borderRadius: "5%"}}
                width="512"
                height="512"
                src={kai}
                alt="kai"
                animate={{
                    border: ["4px solid #F00", "4px solid #0F0", "4px solid #00F", "4px solid #F0F", "4px solid #F00"],
                    boxShadow: ["0px 0px 12px #F00", "0px 0px 12px #0F0", "0px 0px 12px #00F", "0px 0px 12px #F0F", "0px 0px 12px #F00"]
                }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat : Infinity,
                }}
            />
    )
    }

export default ImageView;