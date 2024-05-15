gdjs.ChatCode = {};
gdjs.ChatCode.GDPeoplePanelObjects1= [];
gdjs.ChatCode.GDPeoplePanelObjects2= [];
gdjs.ChatCode.GDPeoplePanelObjects3= [];
gdjs.ChatCode.GDSendObjects1= [];
gdjs.ChatCode.GDSendObjects2= [];
gdjs.ChatCode.GDSendObjects3= [];
gdjs.ChatCode.GDMessageBackgroundObjects1= [];
gdjs.ChatCode.GDMessageBackgroundObjects2= [];
gdjs.ChatCode.GDMessageBackgroundObjects3= [];
gdjs.ChatCode.GDMessageTextInputObjects1= [];
gdjs.ChatCode.GDMessageTextInputObjects2= [];
gdjs.ChatCode.GDMessageTextInputObjects3= [];
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1= [];
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects2= [];
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects3= [];
gdjs.ChatCode.GDNewPanelSpriteObjects1= [];
gdjs.ChatCode.GDNewPanelSpriteObjects2= [];
gdjs.ChatCode.GDNewPanelSpriteObjects3= [];
gdjs.ChatCode.GDNewSpriteObjects1= [];
gdjs.ChatCode.GDNewSpriteObjects2= [];
gdjs.ChatCode.GDNewSpriteObjects3= [];
gdjs.ChatCode.GDPersonimg1Objects1= [];
gdjs.ChatCode.GDPersonimg1Objects2= [];
gdjs.ChatCode.GDPersonimg1Objects3= [];
gdjs.ChatCode.GDPerson1Objects1= [];
gdjs.ChatCode.GDPerson1Objects2= [];
gdjs.ChatCode.GDPerson1Objects3= [];
gdjs.ChatCode.GDPersonimg2Objects1= [];
gdjs.ChatCode.GDPersonimg2Objects2= [];
gdjs.ChatCode.GDPersonimg2Objects3= [];
gdjs.ChatCode.GDPerson2Objects1= [];
gdjs.ChatCode.GDPerson2Objects2= [];
gdjs.ChatCode.GDPerson2Objects3= [];
gdjs.ChatCode.GDSearchButtonObjects1= [];
gdjs.ChatCode.GDSearchButtonObjects2= [];
gdjs.ChatCode.GDSearchButtonObjects3= [];
gdjs.ChatCode.GDNewSprite2Objects1= [];
gdjs.ChatCode.GDNewSprite2Objects2= [];
gdjs.ChatCode.GDNewSprite2Objects3= [];
gdjs.ChatCode.GDNewSprite3Objects1= [];
gdjs.ChatCode.GDNewSprite3Objects2= [];
gdjs.ChatCode.GDNewSprite3Objects3= [];
gdjs.ChatCode.GDLargeExitButtonObjects1= [];
gdjs.ChatCode.GDLargeExitButtonObjects2= [];
gdjs.ChatCode.GDLargeExitButtonObjects3= [];
gdjs.ChatCode.GDPersonimg3Objects1= [];
gdjs.ChatCode.GDPersonimg3Objects2= [];
gdjs.ChatCode.GDPersonimg3Objects3= [];
gdjs.ChatCode.GDPersonimg4Objects1= [];
gdjs.ChatCode.GDPersonimg4Objects2= [];
gdjs.ChatCode.GDPersonimg4Objects3= [];
gdjs.ChatCode.GDPersonimg5Objects1= [];
gdjs.ChatCode.GDPersonimg5Objects2= [];
gdjs.ChatCode.GDPersonimg5Objects3= [];
gdjs.ChatCode.GDPersonimg6Objects1= [];
gdjs.ChatCode.GDPersonimg6Objects2= [];
gdjs.ChatCode.GDPersonimg6Objects3= [];
gdjs.ChatCode.GDPerson3Objects1= [];
gdjs.ChatCode.GDPerson3Objects2= [];
gdjs.ChatCode.GDPerson3Objects3= [];
gdjs.ChatCode.GDPerson4Objects1= [];
gdjs.ChatCode.GDPerson4Objects2= [];
gdjs.ChatCode.GDPerson4Objects3= [];
gdjs.ChatCode.GDPerson5Objects1= [];
gdjs.ChatCode.GDPerson5Objects2= [];
gdjs.ChatCode.GDPerson5Objects3= [];
gdjs.ChatCode.GDPerson6Objects1= [];
gdjs.ChatCode.GDPerson6Objects2= [];
gdjs.ChatCode.GDPerson6Objects3= [];
gdjs.ChatCode.GDPersonimg7Objects1= [];
gdjs.ChatCode.GDPersonimg7Objects2= [];
gdjs.ChatCode.GDPersonimg7Objects3= [];
gdjs.ChatCode.GDBottomPeoplePanelObjects1= [];
gdjs.ChatCode.GDBottomPeoplePanelObjects2= [];
gdjs.ChatCode.GDBottomPeoplePanelObjects3= [];
gdjs.ChatCode.GDPerson7Objects1= [];
gdjs.ChatCode.GDPerson7Objects2= [];
gdjs.ChatCode.GDPerson7Objects3= [];
gdjs.ChatCode.GDPeoplePanelButtonObjects1= [];
gdjs.ChatCode.GDPeoplePanelButtonObjects2= [];
gdjs.ChatCode.GDPeoplePanelButtonObjects3= [];


gdjs.ChatCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects2);
gdjs.copyArray(gdjs.ChatCode.GDPeoplePanelButtonObjects1, gdjs.ChatCode.GDPeoplePanelButtonObjects2);

{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelObjects2[i].getBehavior("Tween").addObjectWidthTween2("Open", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3.5, "easeOutExpo", 0.4, false);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelButtonObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelButtonObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects1);
/* Reuse gdjs.ChatCode.GDPeoplePanelButtonObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelObjects1[i].getBehavior("Tween").addObjectWidthTween2("Close", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 10, "easeOutExpo", 0.4, false);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelButtonObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelButtonObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs.ChatCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PeoplePanelButton"), gdjs.ChatCode.GDPeoplePanelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDPeoplePanelButtonObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDPeoplePanelButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDPeoplePanelButtonObjects1[k] = gdjs.ChatCode.GDPeoplePanelButtonObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDPeoplePanelButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.ChatCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ChatCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_0) {
}

}


};gdjs.ChatCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ChatCode.GDPeoplePanelObjects1, gdjs.ChatCode.GDPeoplePanelObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDPeoplePanelObjects2.length;i<l;++i) {
    if ( gdjs.ChatCode.GDPeoplePanelObjects2[i].getBehavior("Tween").hasFinished("Open") ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDPeoplePanelObjects2[k] = gdjs.ChatCode.GDPeoplePanelObjects2[i];
        ++k;
    }
}
gdjs.ChatCode.GDPeoplePanelObjects2.length = k;
if (isConditionTrue_0) {
}

}


};gdjs.ChatCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChatCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.ChatCode.GDPeoplePanelObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDPeoplePanelObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDPeoplePanelObjects1[i].getBehavior("Tween").hasFinished("Close") ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDPeoplePanelObjects1[k] = gdjs.ChatCode.GDPeoplePanelObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDPeoplePanelObjects1.length = k;
}
if (isConditionTrue_0) {
}

}


};gdjs.ChatCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ChatCode.GDPeoplePanelObjects1, gdjs.ChatCode.GDPeoplePanelObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDPeoplePanelObjects2.length;i<l;++i) {
    if ( gdjs.ChatCode.GDPeoplePanelObjects2[i].getBehavior("Tween").getProgress("Open") >= 0.7 ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDPeoplePanelObjects2[k] = gdjs.ChatCode.GDPeoplePanelObjects2[i];
        ++k;
    }
}
gdjs.ChatCode.GDPeoplePanelObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Person1"), gdjs.ChatCode.GDPerson1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person2"), gdjs.ChatCode.GDPerson2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person3"), gdjs.ChatCode.GDPerson3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person4"), gdjs.ChatCode.GDPerson4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person5"), gdjs.ChatCode.GDPerson5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person6"), gdjs.ChatCode.GDPerson6Objects2);
gdjs.copyArray(runtimeScene.getObjects("Person7"), gdjs.ChatCode.GDPerson7Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg1"), gdjs.ChatCode.GDPersonimg1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg2"), gdjs.ChatCode.GDPersonimg2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg3"), gdjs.ChatCode.GDPersonimg3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg4"), gdjs.ChatCode.GDPersonimg4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg5"), gdjs.ChatCode.GDPersonimg5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg6"), gdjs.ChatCode.GDPersonimg6Objects2);
gdjs.copyArray(runtimeScene.getObjects("Personimg7"), gdjs.ChatCode.GDPersonimg7Objects2);
gdjs.copyArray(runtimeScene.getObjects("SearchButton"), gdjs.ChatCode.GDSearchButtonObjects2);
{for(var i = 0, len = gdjs.ChatCode.GDPerson1Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson1Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson2Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson2Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson3Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson3Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson4Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson4Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson5Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson5Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson6Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson6Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPerson7Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson7Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg1Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg1Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg2Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg2Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg3Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg3Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg4Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg4Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg5Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg5Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg6Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg6Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg7Objects2.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg7Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.ChatCode.GDSearchButtonObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDSearchButtonObjects2[i].hide(false);
}
}}

}


};gdjs.ChatCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.ChatCode.GDPeoplePanelObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDPeoplePanelObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDPeoplePanelObjects1[i].getBehavior("Tween").getProgress("Close") >= 0.7 ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDPeoplePanelObjects1[k] = gdjs.ChatCode.GDPeoplePanelObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDPeoplePanelObjects1.length = k;
if (isConditionTrue_0) {
}

}


};gdjs.ChatCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChatCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Person1"), gdjs.ChatCode.GDPerson1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person2"), gdjs.ChatCode.GDPerson2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person3"), gdjs.ChatCode.GDPerson3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person4"), gdjs.ChatCode.GDPerson4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person5"), gdjs.ChatCode.GDPerson5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person6"), gdjs.ChatCode.GDPerson6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person7"), gdjs.ChatCode.GDPerson7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg1"), gdjs.ChatCode.GDPersonimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg2"), gdjs.ChatCode.GDPersonimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg3"), gdjs.ChatCode.GDPersonimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg4"), gdjs.ChatCode.GDPersonimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg5"), gdjs.ChatCode.GDPersonimg5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg6"), gdjs.ChatCode.GDPersonimg6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg7"), gdjs.ChatCode.GDPersonimg7Objects1);
gdjs.copyArray(runtimeScene.getObjects("SearchButton"), gdjs.ChatCode.GDSearchButtonObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson1Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson2Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson3Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson4Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson5Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson5Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson6Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson6Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPerson7Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson7Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg1Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg1Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg2Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg2Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg3Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg4Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg4Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg5Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg5Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg6Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg6Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg7Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg7Objects1[i].hide();
}
for(var i = 0, len = gdjs.ChatCode.GDSearchButtonObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDSearchButtonObjects1[i].hide();
}
}
{ //Subevents
gdjs.ChatCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.ChatCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "es-ES";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].setPlaceholder("Mensaje");
}
}}

}


};gdjs.ChatCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.1 <= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.4 >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("4:3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.6 <= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.8 >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("16:9");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.4 < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (1.6 > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("5:3");
}}

}


};gdjs.ChatCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDSendObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDSendObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDSendObjects1[k] = gdjs.ChatCode.GDSendObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDSendObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDMessageTextInputObjects1.length;i<l;++i) {
    if ( (gdjs.ChatCode.GDMessageTextInputObjects1[i].getBehavior("Text").getText()).startsWith("applereligion") ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDMessageTextInputObjects1[k] = gdjs.ChatCode.GDMessageTextInputObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDMessageTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "chat", "https://rumbletalk.com/client/chat.php?D*4GVwY0", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), 0, 0, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


gdjs.ChatCode.eventsList1(runtimeScene);
}


{


gdjs.ChatCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FalseForcesPeoplePanel"), gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Person1"), gdjs.ChatCode.GDPerson1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person2"), gdjs.ChatCode.GDPerson2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person3"), gdjs.ChatCode.GDPerson3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person4"), gdjs.ChatCode.GDPerson4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person5"), gdjs.ChatCode.GDPerson5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person6"), gdjs.ChatCode.GDPerson6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Person7"), gdjs.ChatCode.GDPerson7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg1"), gdjs.ChatCode.GDPersonimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg2"), gdjs.ChatCode.GDPersonimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg3"), gdjs.ChatCode.GDPersonimg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg4"), gdjs.ChatCode.GDPersonimg4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg5"), gdjs.ChatCode.GDPersonimg5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg6"), gdjs.ChatCode.GDPersonimg6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Personimg7"), gdjs.ChatCode.GDPersonimg7Objects1);
{for(var i = 0, len = gdjs.ChatCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson1Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg1Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg1Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson2Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 70);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg2Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg2Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 70);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson3Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 140);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg3Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 140);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson4Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 210);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg4Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg4Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 210);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson5Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson5Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 280);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg5Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg5Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 280);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson6Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson6Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 350);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg6Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg6Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 350);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPerson7Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPerson7Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 420);
}
for(var i = 0, len = gdjs.ChatCode.GDPersonimg7Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPersonimg7Objects1[i].setY((( gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1[0].getPointY("")) + 420);
}
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == "4:3";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageBackground"), gdjs.ChatCode.GDMessageBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ChatCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanelButton"), gdjs.ChatCode.GDPeoplePanelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDSendObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDSendObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 131);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSprite3Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelButtonObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelButtonObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 95);
}
}
{ //Subevents
gdjs.ChatCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == "16:9";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageBackground"), gdjs.ChatCode.GDMessageBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ChatCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanelButton"), gdjs.ChatCode.GDPeoplePanelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDSendObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDSendObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 131);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSprite3Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelButtonObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelButtonObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 95);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == "5:3";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageBackground"), gdjs.ChatCode.GDMessageBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ChatCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanelButton"), gdjs.ChatCode.GDPeoplePanelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDSendObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDSendObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 131);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) + 25);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageBackgroundObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageBackgroundObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 170);
}
}{for(var i = 0, len = gdjs.ChatCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSprite3Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelButtonObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelButtonObjects1[i].setX((( gdjs.ChatCode.GDPeoplePanelObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDPeoplePanelObjects1[0].getWidth()) - 95);
}
}
{ //Subevents
gdjs.ChatCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDSendObjects1.length;i<l;++i) {
    if ( !(gdjs.ChatCode.GDSendObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDSendObjects1[k] = gdjs.ChatCode.GDSendObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDSendObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ChatCode.GDNewSpriteObjects1);
/* Reuse gdjs.ChatCode.GDSendObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSpriteObjects1[i].setCenterPositionInScene((( gdjs.ChatCode.GDSendObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDSendObjects1[0].getCenterXInScene()),(( gdjs.ChatCode.GDSendObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDSendObjects1[0].getCenterYInScene()) - 6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Send"), gdjs.ChatCode.GDSendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChatCode.GDSendObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDSendObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ChatCode.GDSendObjects1[k] = gdjs.ChatCode.GDSendObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDSendObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ChatCode.GDNewSpriteObjects1);
/* Reuse gdjs.ChatCode.GDSendObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSpriteObjects1[i].setCenterPositionInScene((( gdjs.ChatCode.GDSendObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDSendObjects1[0].getCenterXInScene()),(( gdjs.ChatCode.GDSendObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDSendObjects1[0].getCenterYInScene()) + 4);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Settings", "Language");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Language", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Settings", "Language"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageTextInput"), gdjs.ChatCode.GDMessageTextInputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtsExt__Language__Language.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Language", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.ChatCode.GDMessageTextInputObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDMessageTextInputObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__Language__Language.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))).startsWith("es");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChatCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ChatCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PeoplePanel"), gdjs.ChatCode.GDPeoplePanelObjects1);
{for(var i = 0, len = gdjs.ChatCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.ChatCode.GDNewSprite2Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{for(var i = 0, len = gdjs.ChatCode.GDPeoplePanelObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDPeoplePanelObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3.5);
}
}
{ //Subevents
gdjs.ChatCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
}

}


};

gdjs.ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChatCode.GDPeoplePanelObjects1.length = 0;
gdjs.ChatCode.GDPeoplePanelObjects2.length = 0;
gdjs.ChatCode.GDPeoplePanelObjects3.length = 0;
gdjs.ChatCode.GDSendObjects1.length = 0;
gdjs.ChatCode.GDSendObjects2.length = 0;
gdjs.ChatCode.GDSendObjects3.length = 0;
gdjs.ChatCode.GDMessageBackgroundObjects1.length = 0;
gdjs.ChatCode.GDMessageBackgroundObjects2.length = 0;
gdjs.ChatCode.GDMessageBackgroundObjects3.length = 0;
gdjs.ChatCode.GDMessageTextInputObjects1.length = 0;
gdjs.ChatCode.GDMessageTextInputObjects2.length = 0;
gdjs.ChatCode.GDMessageTextInputObjects3.length = 0;
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects1.length = 0;
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects2.length = 0;
gdjs.ChatCode.GDFalseForcesPeoplePanelObjects3.length = 0;
gdjs.ChatCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.ChatCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.ChatCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.ChatCode.GDNewSpriteObjects1.length = 0;
gdjs.ChatCode.GDNewSpriteObjects2.length = 0;
gdjs.ChatCode.GDNewSpriteObjects3.length = 0;
gdjs.ChatCode.GDPersonimg1Objects1.length = 0;
gdjs.ChatCode.GDPersonimg1Objects2.length = 0;
gdjs.ChatCode.GDPersonimg1Objects3.length = 0;
gdjs.ChatCode.GDPerson1Objects1.length = 0;
gdjs.ChatCode.GDPerson1Objects2.length = 0;
gdjs.ChatCode.GDPerson1Objects3.length = 0;
gdjs.ChatCode.GDPersonimg2Objects1.length = 0;
gdjs.ChatCode.GDPersonimg2Objects2.length = 0;
gdjs.ChatCode.GDPersonimg2Objects3.length = 0;
gdjs.ChatCode.GDPerson2Objects1.length = 0;
gdjs.ChatCode.GDPerson2Objects2.length = 0;
gdjs.ChatCode.GDPerson2Objects3.length = 0;
gdjs.ChatCode.GDSearchButtonObjects1.length = 0;
gdjs.ChatCode.GDSearchButtonObjects2.length = 0;
gdjs.ChatCode.GDSearchButtonObjects3.length = 0;
gdjs.ChatCode.GDNewSprite2Objects1.length = 0;
gdjs.ChatCode.GDNewSprite2Objects2.length = 0;
gdjs.ChatCode.GDNewSprite2Objects3.length = 0;
gdjs.ChatCode.GDNewSprite3Objects1.length = 0;
gdjs.ChatCode.GDNewSprite3Objects2.length = 0;
gdjs.ChatCode.GDNewSprite3Objects3.length = 0;
gdjs.ChatCode.GDLargeExitButtonObjects1.length = 0;
gdjs.ChatCode.GDLargeExitButtonObjects2.length = 0;
gdjs.ChatCode.GDLargeExitButtonObjects3.length = 0;
gdjs.ChatCode.GDPersonimg3Objects1.length = 0;
gdjs.ChatCode.GDPersonimg3Objects2.length = 0;
gdjs.ChatCode.GDPersonimg3Objects3.length = 0;
gdjs.ChatCode.GDPersonimg4Objects1.length = 0;
gdjs.ChatCode.GDPersonimg4Objects2.length = 0;
gdjs.ChatCode.GDPersonimg4Objects3.length = 0;
gdjs.ChatCode.GDPersonimg5Objects1.length = 0;
gdjs.ChatCode.GDPersonimg5Objects2.length = 0;
gdjs.ChatCode.GDPersonimg5Objects3.length = 0;
gdjs.ChatCode.GDPersonimg6Objects1.length = 0;
gdjs.ChatCode.GDPersonimg6Objects2.length = 0;
gdjs.ChatCode.GDPersonimg6Objects3.length = 0;
gdjs.ChatCode.GDPerson3Objects1.length = 0;
gdjs.ChatCode.GDPerson3Objects2.length = 0;
gdjs.ChatCode.GDPerson3Objects3.length = 0;
gdjs.ChatCode.GDPerson4Objects1.length = 0;
gdjs.ChatCode.GDPerson4Objects2.length = 0;
gdjs.ChatCode.GDPerson4Objects3.length = 0;
gdjs.ChatCode.GDPerson5Objects1.length = 0;
gdjs.ChatCode.GDPerson5Objects2.length = 0;
gdjs.ChatCode.GDPerson5Objects3.length = 0;
gdjs.ChatCode.GDPerson6Objects1.length = 0;
gdjs.ChatCode.GDPerson6Objects2.length = 0;
gdjs.ChatCode.GDPerson6Objects3.length = 0;
gdjs.ChatCode.GDPersonimg7Objects1.length = 0;
gdjs.ChatCode.GDPersonimg7Objects2.length = 0;
gdjs.ChatCode.GDPersonimg7Objects3.length = 0;
gdjs.ChatCode.GDBottomPeoplePanelObjects1.length = 0;
gdjs.ChatCode.GDBottomPeoplePanelObjects2.length = 0;
gdjs.ChatCode.GDBottomPeoplePanelObjects3.length = 0;
gdjs.ChatCode.GDPerson7Objects1.length = 0;
gdjs.ChatCode.GDPerson7Objects2.length = 0;
gdjs.ChatCode.GDPerson7Objects3.length = 0;
gdjs.ChatCode.GDPeoplePanelButtonObjects1.length = 0;
gdjs.ChatCode.GDPeoplePanelButtonObjects2.length = 0;
gdjs.ChatCode.GDPeoplePanelButtonObjects3.length = 0;

gdjs.ChatCode.eventsList10(runtimeScene);

return;

}

gdjs['ChatCode'] = gdjs.ChatCode;
