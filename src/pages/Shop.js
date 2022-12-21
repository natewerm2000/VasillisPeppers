import jelly from '../images/logo.png';

export default function Shop(){
    return <div className = "shop">
<div id = "header"><h1>Shop</h1></div>
    <div class="card">
        <img src={jelly} alt=""/>
        <div class="container">
            <h4><b>Hot Pepper Jelly</b></h4> 
            <p>dsahdkwjkdhaklwdhdlhwadkwajhd</p> 
        </div>
    </div>
    <div id = "space"></div>
    <div class="card">
        <img src={jelly} alt=""/>
        <div class="container">
            <h4><b>Hot Pepper Seasonings</b></h4> 
            <p>dsahdkwjkdhaklwdhdlhwadkwajhd</p> 
        </div>
    </div>
</div>
}