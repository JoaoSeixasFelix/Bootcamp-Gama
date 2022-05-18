import './HeaderScreen.css'

export default function HeaderScreen () {
    return(
        <div className="header-description">
            <p className='description-header'>Meus Programas</p>
            <img src='./src/components/Pictures/-background.svg'style={{marginLeft:"1600px",marginTop:'30px'}}></img>
            <p className='description-item'>Crie e personalize programas de recompensas para o seu cliente.</p>
        </div>
    )
}