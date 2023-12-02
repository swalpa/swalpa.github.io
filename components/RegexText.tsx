"use client"
const RegexText = ({text}: {text:string | undefined | null}) => {
    console.log(text);

  if(text === "" || text === null || text === undefined) return <div></div>
  const getTSX = (text: string) => {
    const parts = text.split(/\{\{([^[]+)\[([^\]]*)\]\}\}/);
    return parts.map((part, index)=> {
        console.log(part);
        const match = part.match(/{\{([^[]+)\[([^\]]*)\]\}\}/);
        if(match) {
            console.log(match);
            return <a key={index} href={match[0]}>{match[1]}</a>
        }
        else {
            return part
        }
    })
    
  }
  return <div>{getTSX(text)}</div>
}

export default RegexText