import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/userreducer";

export default function Couleur() {
  const { previewColor, setPreviewColor } = useOutletContext();
  const user = useSelector((state) => state.USER.user);
  const dispatch = useDispatch();

  const age = user.age>=15?true:false

  return (<>
          {age && (
          <>
            <h3>Changer couleur</h3>

            <input
              type="color"
              value={previewColor}             
              onChange={(e) => setPreviewColor(e.target.value)}
            />

            <button
              className="btn btn-primary ms-2"
              onClick={() => {
                dispatch(changeColor(previewColor));
              }}
            >Confirmer</button>
          </>
        )}
        
        {!age && <h1>votre couleur {previewColor}    </h1>}
        </>);
}
