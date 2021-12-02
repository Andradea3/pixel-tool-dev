import { useState } from "react";
import classes from "../components/layout/StandardClasses.module.css";
import { useForm } from "react-hook-form";
import ReactDayPicker from "../components/pixels/DatePicker";
import Card from "../components/ui/Card";
import ScopeSelector from "../components/pixels/ScopeSelector";
import PageSelector from "../components/pixels/PageSelector";
import PixelCard from "../components/pixels/PixelCard";
import InfoPage from "../components/form/Info";
import ScopePage from "../components/form/Scope";
import PagePage from "../components/form/Pages";
import PixelPage from "../components/form/Pixel";
import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
	const [formStep, setFormStep] = useState(0);
	const [modalDisplay, setModalDisplay] = useState(false); 

	const {
		watch,
		register,
		setValue,
		setError,
		unregister,
		formState: { errors, isValid },
	} = useForm({
		mode: "all",
		defaultValues: {
			requestingClient: "",
			scope: "",
		}
	});

	

	return (
		<form >
			{formStep >= 0 && (
				<div id="first-step" className={formStep === 0 ? classes.displayBlock : classes.displayHidden}>
					<h1>Request Info</h1>
					<div className={classes.control}>
						<label htmlFor="client">Requesting Client</label>
						<input
							type="text"
							required
							id="client"
							name="requestingClient"
							autoComplete="off"
							{...register("requestingClient", { required: true })}
						/>
						{errors.requestingClient && (
							<p className={classes.errorMessage}>This field is required</p>
						)}
						<label htmlFor="context">Context ID</label>
						<input
							type="text"
							required
							id="context"
							name="contextID"
							autoComplete="off"
							{...register("contextID", { required: true })}
						/>
						{errors.contextID && (
							<p className={classes.errorMessage}>This field is required</p>
						)}
						<label htmlFor="ticket">Ticket ID</label>
						<input
							type="text"
							placeholder=" PIX-500"
							required
							name="ticketID"
							autoComplete="off"
							{...register("ticketID", { required: true })}
						/>
						{errors.ticketID && (
							<p className={classes.errorMessage}>This field is required</p>
						)}

						<label>End Date</label>
					</div>
					<ReactDayPicker
						setValue={setValue}
					/>
					{watch("endDate") === undefined ? (
						<p className={classes.errorMessage}>This field is required</p>
					) : null}

					<div className={classes.control}>
						<label htmlFor="description">Brief Description</label>
						{/* TODO: change the input to textArea */}
						<input
							type="text"
							required
							name="briefDescription"
							id="description"
							autoComplete="off"
							{...register("briefDescription", { required: true })}
						/>
						{errors.briefDescription && (
							<p className={classes.errorMessage}>This field is required</p>
						)}

						<label htmlFor="domains">Domain for Cross-Domain Tracking</label>
						<input
							type="text"
							placeholder=" nba.com"
							id="domains"
							name="crossDomainTracking"
							autoComplete="off"
							{...register("crossDomainTracking")}
						/>
					</div>
				</div>
			)}

			{formStep >= 1 && (
				<div id="second-step" className={formStep === 1 ? classes.displayBlock : classes.displayHidden}>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
                        {
                            renderDataBoxes()
                        }
                    </div>
					<h1>TrueMetrics</h1>
					<label></label>
					{/*TODO Tal vez dejar un valor predeterminado ? */}
					<ScopeSelector 
						setValue={setValue}
						watch={watch}
						unregister={unregister}
					/>
					<br />
					<Card>
						<div className={classes.control}>
							<label htmlFor="context" >Context ID</label>
							<input type="text" id="context" value={watch("contextID")} readOnly/>
							{watch("scope") === "Event" && (
								<>
									<label htmlFor="ticketingevents">Ticketing Event IDs</label>
									<input
										type="text"
										placeholder=" 123,124,156..."
										
										id="ticketingevents"
										{...register("ticketingEvents", { required: true })}
									/>
									{errors.ticketingEvents && (<p className={classes.errorMessage}>This field is required</p>)}
								</>
							)}
							
						</div>
					</Card>
				</div>
			)}

			{formStep >= 2 && (
				<div id="third-step" className={formStep === 2 ? classes.displayBlock : classes.displayHidden}>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
                        {
                            renderDataBoxes()
                        }
                    </div>
					<h1>Pages to Fire</h1>
					<PageSelector 
						setVal={setValue}
						watch={watch}
					/>
					<br />
				</div>
			)}

			{formStep >= 3 && (
				<div id="fourth-step" className={formStep === 3 ? classes.displayBlock : classes.displayHidden}>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
                        {
                            renderDataBoxes()
                        }
                    </div>
					<h1>Pixels to be Placed</h1>
					<PixelCard 
						register={register}
					/>
					<br />
				</div>
			)}
			{renderButtons(formStep)}
			<pre>{JSON.stringify(watch(), null, 2)}</pre>
		</form>
	);

	function renderButtons(formStep) {
		if (formStep > 3) {
			return null;
		} else if (formStep == 3) {
			return (
				<div className={classes.actions}>
					<button onClick={previousScreen} type="button">Go back</button>
					<button onClick={nextScreen} type="button">
						Preview
					</button>
				</div>
			);
		} else if (formStep === 0) {
			return (
				<div className={classes.actions}>
					<button
						disabled={currentFormInvalid(0)}
						onClick={nextScreen}
						type="button"
					>
						Next
					</button>
				</div>
			);
		} else if (formStep === 2) {
			return (
				<div className={classes.actions}>
					<button onClick={previousScreen} type="button">Go back</button>
					<button
						disabled={currentFormInvalid(2)}
						type="button"
						onClick={() => {
							validateCheckBoxes();
						}}
					>
						Next
					</button>
				</div>
			);
		} else {
			return (
				<div className={classes.actions}>
					<button onClick={previousScreen} type="button">Go back</button>
					<button
						disabled={currentFormInvalid(formStep)} 
						onClick={nextScreen} 
						type="button"
					>
						Next
					</button>
				</div>
			);
		}
	}
	function currentFormInvalid(pageNumber) {
		if (pageNumber === 0) {
			if (isValid === false || watch("endDate") === undefined) {
				return true;
			}
			return null;
		} else if (pageNumber === 1) {
			if (isValid === false || watch("scope") === "") {
				return true;
			}
		} else if (pageNumber === 2) {
			if (watch("pixelPageScope") === undefined) {
				return true;
			}
		}
	}
	function nextScreen() {
		setFormStep((formStep) => formStep + 1);
	}
    function previousScreen() {
        setFormStep((formStep) => formStep - 1);
    }
	function renderDataBoxes() {

		// en la tercera pagina en pixelPageScope, podemos mostrarlo asi
		//TODO pixelPageScope: Custom (EDP, Select ticket, Sign In)

		var currentDataObj = watch();
        var currentDataArr = Object.keys(currentDataObj).map(currentProperty => {
            return {
				fieldName: currentProperty,
				fieldValue: currentDataObj[currentProperty]
            }
        });
		var $currentData = currentDataArr.map(field => {
			return (
				<div key={field.fieldName} className={classes.dataField}>{`${field.fieldName}: ${field.fieldValue}`}</div>
			)
		})
        return (
			<>
				{$currentData}
			</>
		)
    }
	function validateCheckBoxes() {
		const $checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
		const $validCheckboxes = $checkBoxes.filter($checkbox => $checkbox.checked).map($checkbox => $checkbox.previousElementSibling.textContent);
		console.log($validCheckboxes);
		if ($validCheckboxes.length === 0) {
			setModalDisplay(true);
			return false;
		} else {
			nextScreen();
			setValue("Pages", [...$validCheckboxes])
			return true;
		}
	}
}
