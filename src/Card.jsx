function Card() {

    let num = Math.random() * 100000;

    return <div>
        <h2>Number: {Math.round(num)} </h2>

        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
    </div>
    
}

export default Card;