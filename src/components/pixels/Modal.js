function Modal ({ handleClose, modalDisplay, children }) {
    const showOrHideClassname = modalDisplay ? "modal display-block" : "modal display-none";

    return (
        <div className={showOrHideClassname}>
            <section className="modal main">
                {children}
                <button type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}