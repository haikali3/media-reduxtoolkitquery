import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResult] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="w-8 h-8" times={4} />;
  } else if (error) {
    content = <div className="text-red-500">Error fetching photos.</div>;
  } else if (data) {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h2 className="text-lg font-bold">Photos in {album.title}</h2>
        <Button loading={addPhotoResult.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap justify-center mx-8 ">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
