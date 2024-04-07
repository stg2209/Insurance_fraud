import "../styles/FooterStyles.css"

const Footer = () => {
   return(
    <div className="footer">
    <div className="top">
        <div>
            <h4><bold>Contact Us: insuranceclaim@gmail.com</bold></h4>
        </div>
        <div>
            <a href="/"> 
            <i class="fab fa-facebook-square"></i>
            </a>
            <a href="/"> 
            <i class="fab fa-instagram-square"></i>
            </a>
            <a href="/"> 
            <i class="fab fa-behance-square"></i>
            </a>
            <a href="/"> 
            <i class="fab fa-twitter-square"></i>
            </a>
        </div>
    </div>

    <div className="bottom">
        <div>
        <h4>Project</h4> 
       <a href="/">Changelog</a>
       <a href="/">Status</a>
       <a href="/">License</a>
       <a href="/">All Versions</a> 
        </div>
        <div>
        <h4>Project</h4> 
       <a href="/">Changelog</a>
       <a href="/">Status</a>
       <a href="/">License</a>
       <a href="/">All Versions</a> 
        </div>
        <div>
        <h4>Project</h4> 
       <a href="/">Changelog</a>
       <a href="/">Status</a>
       <a href="/">License</a>
       <a href="/">All Versions</a> 
        </div>
        <div>
        <h4>Project</h4> 
       <a href="/">Changelog</a>
       <a href="/">Status</a>
       <a href="/">License</a>
       <a href="/">All Versions</a> 
        </div>
      
    </div>
    </div>
   ) 
}

export default Footer