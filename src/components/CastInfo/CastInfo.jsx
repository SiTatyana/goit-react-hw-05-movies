

export const CastInfo = ({cast}) =>{
    const {character, profile_path, name} = cast;
    return <div>
        <div>
            <img src={profile_path} width='200' alt={name} />
        </div>
        <p>{name}</p>
        <p>{"Character: "}<span>{character}</span></p>
    </div>
}