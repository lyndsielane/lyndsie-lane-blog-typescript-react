import "./Books.scss";
import comingSoon from "../../assets/images/ComingSoon.png";

function Books() {
  return (
    <div>
      <div className="BooksItem">
        <div className="stillYours">
          <div className="bookTitle">I'm Still Yours</div>
          <div className="seriesTitle">
            When Hope Rises from the Ashes of Darkness
          </div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
      </div>
      <div className="verticalRow"></div>
      <div className="BooksItem">
        <div className="stillYours">
          <div className="bookTitle">Field of Innocence</div>
          <div className="seriesTitle">The Euphoria Series</div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
        <div className="stillYours">
          <div className="bookTitle">Hollow of Treason</div>
          <div className="seriesTitle">The Euphoria Series</div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
        <div className="stillYours">
          <div className="bookTitle">Meadow of Ephiphany</div>
          <div className="seriesTitle">The Euphoria Series</div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
        <div className="stillYours">
          <div className="bookTitle">Garden of Resolve</div>
          <div className="seriesTitle">The Euphoria Series</div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
      </div>
    </div>
  );
}

export default Books;
