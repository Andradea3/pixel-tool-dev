import { useState } from "react";
import classes from "../components/layout/StandardClasses.module.css";
import { useForm } from "react-hook-form";
import ReactDayPicker from "../components/pixels/DatePicker";
import Card from "../components/ui/Card";
import ScopeSelector from "../components/pixels/ScopeSelector";
import PageSelector from "../components/pixels/PageSelector";
import PixelCard from "../components/pixels/PixelCard";


export default function Form() {
	const [formStep, setFormStep] = useState(0);
	const {
		watch,
		register,
		setValue,
		unregister,
		formState: { errors, isValid },
	} = useForm({
		mode: "all",
		defaultValues: {
			requestingClient: "",
			scope: "",
		},
	});

	return (
		<form>
			{formStep >= 0 && (
				<div
					id="first-step"
					className={
						formStep === 0 ? classes.displayBlock : classes.displayHidden
					}
				>
					
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
					<ReactDayPicker setValue={setValue} />
					{watch("endDate") === undefined ? (
						<p className={classes.errorMessage}>This field is required</p>
					) : null}

					<div className={classes.control}>
						<label htmlFor="description">Brief Description</label>
						<textarea
							required
							rows="4"
							columns="10"
							id="description"
							autoComplete="off"
							{...register("briefDescription", { required: true })}
						></textarea>
						{errors.briefDescription && (
							<p className={classes.errorMessage}>This field is required</p>
						)}

						<label htmlFor="domains">Domain for Cross-Domain Tracking</label>
						<input
							type="text"
							placeholder=" nba.com"
							id="domains"
							autoComplete="off"
							{...register("crossDomainTracking")}
						/>
					</div>
				</div>
			)}

			{formStep >= 1 && (
				<div
					id="second-step"
					className={
						formStep === 1 ? classes.displayBlock : classes.displayHidden
					}
				>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
						<DataBoxes />
					</div>
					<h1>Client</h1>
					<label></label>
					<ScopeSelector
						setValue={setValue}
						watch={watch}
						unregister={unregister}
					/>
					<br />
					<Card>
						<div className={classes.control}>
							<label htmlFor="context">Context ID</label>
							<input
								type="text"
								id="context"
								value={watch("contextID")}
								readOnly
							/>
							{watch("scope") === "Event" && (
								<>
									<label htmlFor="ticketingevents">Ticketing Event IDs</label>
									<input
										type="text"
										placeholder=" 123,124,156..."
										id="ticketingevents"
										{...register("ticketingEvents", { required: true })}
									/>
									{errors.ticketingEvents && (
										<p className={classes.errorMessage}>
											This field is required
										</p>
									)}
								</>
							)}
						</div>
					</Card>
				</div>
			)}

			{formStep >= 2 && (
				<div
					id="third-step"
					className={
						formStep === 2 ? classes.displayBlock : classes.displayHidden
					}
				>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
						<DataBoxes />
					</div>
					<h1>Pages to Fire</h1>
					<PageSelector
						validateCheckBoxes={validateCheckBoxes}
						setVal={setValue}
						watch={watch}
					/>
					{/* displays error if user has not selected */}
					<p
						className={`${classes.errorMessage} ${classes.pageError} ${classes.displayHidden}`}
					>
						Select a page first
					</p>
				</div>
			)}

			{formStep >= 3 && (
				<div
					id="fourth-step"
					className={
						formStep === 3 ? classes.displayBlock : classes.displayHidden
					}
				>
					<h1 className={classes.title}>Scope of the Rule</h1>
					<div className={classes.ruleScope__container}>
						<DataBoxes />
					</div>
					<h1>Pixels to be Placed</h1>
					<PixelCard
						watch={watch}
						register={register}
						unregister={unregister}
						formErrors={errors}
					/>
					<br />
				</div>
			)}

			{formStep >= 4 && (
				<div
					id="fourth-step"
					className={
						formStep === 4 ? classes.displayBlock : classes.displayHidden
					}
				>
					<h1 className={classes.title}>Data Preview</h1>
					<div className={classes.ruleScope__container}>
						<DataBoxes />
					</div>
					<br />
				</div>
			)}
			{renderButtons(formStep)}
		</form>
	);

	function renderButtons(formStep) {
		if (formStep > 4) {
			return null;
		} else if (formStep === 3) {
			return (
				<>
					<div className={classes.actions}>
						<button onClick={previousScreen} type="button">
							Go back
						</button>
						<button 
							onClick={nextScreen} 
							type="button"
							disabled={currentFormInvalid(formStep)}
						>
							Preview
						</button>

					</div>
				</>
			);
		} else if (formStep === 4) {
			return (
				<>
					<div className={classes.actions}>

						<button onClick={previousScreen} type="button">Go back</button>
						<button 
							type="button"
						>Send</button>
					</div>
				</>
			);
		} else if (formStep === 0) {
			return (				
				<>
				<div className={classes.actions}>
					<button
						disabled={currentFormInvalid(0)}
						onClick={nextScreen}
						type="button"
					>
						Next
					</button>

				</div>
				</>
			);
		} else if (formStep === 2) {
			return (
				<>
					<div className={classes.actions}>
						<button onClick={previousScreen} type="button">
							Go back
						</button>
						<button
							disabled={currentFormInvalid(formStep)}
							type="button"
							onClick={validateCheckBoxes}
						>
							Next
						</button>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className={classes.actions}>
						<button onClick={previousScreen} type="button">
							Go back
						</button>
						<button
							disabled={currentFormInvalid(formStep)}
							onClick={nextScreen}
							type="button"
						>
							Next
						</button>
					</div>
				</>
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
		} else if (pageNumber === 3) {
			if (isValid === false) {
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
	function DataBoxes() {
		var currentDataObj = watch();
		var currentDataArr = Object.keys(currentDataObj).map((currentProperty) => {
			return {
				fieldName: currentProperty,
				fieldValue: currentDataObj[currentProperty],
			};
		});

		// we need to use exceptions because in currentDataArr.fieldValue we store strings, arrays (for pages) and objects (for each pixel),
		// so as to render them correctly
		return (
			<Card>
				{currentDataArr.map((field) => {
					if (field.fieldName === "Pages") {
						return (
							<div key={field.fieldName} className={classes.fieldsContainer}>
								<span className={classes.fieldName}>{field.fieldName}</span>
								<ul className={classes.ruleList}>
									{field.fieldValue.map((page, index) => <li key={page}>{page}</li>)}
								</ul>
							</div>
						)
					} else if (Object.prototype.toString.call(field.fieldValue) === '[object Object]') {
						return (
							<div key={field.fieldName} className={classes.fieldsContainer}>
								<span className={classes.fieldName}>{field.fieldName}:</span>
							
								{renderPixel(field.fieldValue)}
							</div>
						)
					} else {
						return (
							<div key={field.fieldName} className={classes.fieldsContainer}>
								<span className={classes.fieldName}>{field.fieldName}:</span>
								<span>{field.fieldValue}</span>
							</div>
						);
					}
				})}
			</Card>
		)

		function renderPixel(pixelObj) {
			return (
				<ul className={classes.ruleList}>
					<li>Type: {pixelObj.type}</li>
					<li>ID: {pixelObj.id}</li>
				</ul>
			)
		}
	}

	// from Pages to fire
	function validateCheckBoxes(event) {
		// Fetching DOM elements
		const $checkBoxes = Array.from(
			document.querySelectorAll('input[type="checkbox"]')
		);
		const $validCheckboxes = $checkBoxes
			.filter(($checkbox) => $checkbox.checked)
			.map(($checkbox) => $checkbox.previousElementSibling.textContent);
		const $errorMessage = document.querySelector(
			`.${classes.errorMessage}.${classes.pageError}`
		);
		
		// If what fires the event is a checkbox, this way we can save some space in the ifs
		const isCheckbox =
			event.target instanceof HTMLLabelElement ||
			event.target instanceof HTMLInputElement ||
			event.target instanceof HTMLSpanElement
				? true
				: false;

		if (isCheckbox && !currentFormInvalid(2)) {

			$errorMessage.classList.add(`${classes.displayHidden}`);
			
		} else if (event.target instanceof HTMLButtonElement) {

			if ($validCheckboxes.length === 0 && !currentFormInvalid(2)) {
				$errorMessage.classList.remove(`${classes.displayHidden}`);
				return false;
			} else {
				// if everything is ok
				nextScreen();
				setValue("Pages", [...$validCheckboxes]);
				return true;
			}
		}
	}
}
