import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';

const FavouriteBtn = ({liked, addFavMovie}) => {
    const likeIcon = (liked) => (liked ? faHeartActive : faHeartInactive);
    const iconStyle = { color: liked ? 'red' : 'inherit' };

    return ( 
        <Button 
            variant="flat" 
            size="lg" 
            onClick={e => addFavMovie()}
            data-toggle="tooltip" 
            data-placement="center" 
            title="Favourite a movie" 
            disabled={liked}
            className="float-left fav-btn" >
            <FontAwesomeIcon
                icon={likeIcon(liked)}
                fixedWidth={true}
                style={iconStyle} />
        </Button>
    );
}
 
export default FavouriteBtn;
