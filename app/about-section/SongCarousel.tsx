import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <>
      <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
        <div className="mx-auto flex w-[100%] justify-around gap-12 lg:my-[1px]">
          {songs.map((song: SongProps, index) => (
            <SongCard key={index} image={song.image} />
          ))}
        </div>
        <div className="mx-auto flex w-[100%] justify-around gap-12 lg:my-[1px]">   
          {songs.map((song: SongProps, index) => (
            <SongCard key={index} image={song.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SongCarousel;
