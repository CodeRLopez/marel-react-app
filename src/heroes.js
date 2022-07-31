import Card from 'react-bootstrap/Card';

function heroData(name) {
    // const property = {
    // // imageUrl: ImageCha,
    // Name: name,
    // // comics: Comics,
    // // nameComics: NameComics,
    // // description: Description,
    // }



    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    );

}


export default heroData;