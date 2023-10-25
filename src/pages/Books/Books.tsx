import "./Books.scss";
import comingSoon from "../../assets/images/ComingSoon.png";

function Books() {
  return (
    <div className="BooksItem">
      <div className="topRow">
        <div className="bookTitle">Field of Innocence</div>
        <div className="seriesTitle">The Euphoria Series</div>
        <div className="bookCover">
          <img src={comingSoon} alt="book cover" />
        </div>
        <div className="buyLink">COMING SOON</div>
      </div>
      <div className="vertical-row"></div>
      <div>
        <div className="bookTitle">Hollow of Treason</div>
        <div className="seriesTitle">The Euphoria Series</div>
        <div className="bookCover">
          <img src={comingSoon} alt="book cover" />
        </div>
        <div className="buyLink">COMING SOON</div>
      </div>
      <div className="vertical-row"></div>
      <div>
        <div className="bookTitle">Meadow of Ephiphany</div>
        <div className="seriesTitle">The Euphoria Series</div>
        <div className="bookCover">
          <img src={comingSoon} alt="book cover" />
        </div>
        <div className="buyLink">COMING SOON</div>
      </div>
      <div className="vertical-row"></div>
      <div>
        <div className="bookTitle">Garden of Resolve</div>
        <div className="seriesTitle">The Euphoria Series</div>
        <div className="bookCover">
          <img src={comingSoon} alt="book cover" />
        </div>
        <div className="buyLink">COMING SOON</div>
      </div>
    </div>
  );
}

export default Books;
