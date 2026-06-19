// import Image from "next/image"
// // import cafe1 from "../../../public/cafe1.jpeg"
// const link = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp15024290.jpg&f=1&nofb=1&ipt=48d1090486b4d2282be8d32a28fc7fb1fbff2f92d6d6e2a6a2c5a9df9b1bb8fb"

export default function Photo({
  link = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp15024290.jpg&f=1&nofb=1&ipt=48d1090486b4d2282be8d32a28fc7fb1fbff2f92d6d6e2a6a2c5a9df9b1bb8fb"
}) {
  return (
    <div>
      <img src={link} alt="Photo"/>
    </div>
  )
}