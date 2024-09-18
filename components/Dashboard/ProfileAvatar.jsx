import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"

const ProfileAvatar = ({ url, fallback}) => {
  return (
    <Avatar>
        <AvatarImage src={url} />
        <AvatarFallback>
            {fallback}
        </AvatarFallback>
    </Avatar>
  )
}

export default ProfileAvatar