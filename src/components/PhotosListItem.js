import { GoTrashcan } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative m-2 ">
      <img className="w-20 h-20 " src={photo.url} alt="random" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-red-800 hover:opacity-80">
        <GoTrashcan className="text-4xl text-slate-200" />
      </div>
    </div>
  );
}

export default PhotosListItem;
