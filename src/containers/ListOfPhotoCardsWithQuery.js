import { withPhotos } from '../models/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
