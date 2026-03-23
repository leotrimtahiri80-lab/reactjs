import "../components/herobanner.scss"
function Herobanner({text, para}) {
    return (
        <section className="herobanner">
            <div>
                <h1>{text}</h1>
                <p>{para}</p>
            </div>
            <div>
                <img src="https://d3gvlpbdidhqp.cloudfront.net///Tour-Images//false-381//img%20f.jpg" alt="" />
            </div>

        </section>
    )
}
export default Herobanner;