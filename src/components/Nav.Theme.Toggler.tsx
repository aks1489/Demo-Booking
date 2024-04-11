import './nav.theme.toggler.css'

export function NavThemeToggler (props : any) {
    return (

        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.setTheme} type="checkbox" id="flexSwitchCheckDefault" />
        </div>
    )
}