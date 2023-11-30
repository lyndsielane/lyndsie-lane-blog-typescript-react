import "./Books.scss";
import stillYours from "../../assets/images/StillYours.jpg";

function Books() {
  return (
    <div>
      <div className="BooksItem">
        <div className="stillYours">
          <div className="bookTitle">I'm Still Yours</div>
          <div className="seriesTitle">
            Hope Rises from<br></br> the Ashes of Darkness
          </div>
          <div className="bookCover">
            <img src={stillYours} alt="book cover" />
          </div>
          <div className="blurb">
            <p>
              
            </p>
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
      </div>
    </div>
  );
}

export default Books;
