function getFormData(){
    

}

function dataSheet(){
    let sheet = SpreadsheetApp.getActiveSheet();
    let data: any = sheet.getDataRange().getValues();
    let dataSheet: any ={};  
  
    for (var i = 0; i < data.length; i++) {
      Logger.log('Product name: ' + data[i][0]);
      Logger.log('Product number: ' + data[i][1]);
      dataSheet.push({
        "first_name":data[i][0],
        "last_name":data[i][1],
        "address":data[i][2],
        "email":data[i][3]
      });
    }
    let dataJson: string = JSON.stringify(dataSheet);
    let dataParse: object = JSON.parse(dataJson);
    
    return dataParse;
  }