package yul.realestateboard;

public class RealEstateVO {

	//space int , gap int 
	//X.CITY,X.VILLAGE,X.DEPOSIT,X.SPACE,X.CONSTRUCTYEAR, Y.PRICE, Y.PRICE -X.DEPOSIT AS GAP  
    private String city; 
    private String village; 
    private String deposit; 
    private int space; 
    private String constructyear; 
    private String price; 
    private int gap;
    
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getVillage() {
		return village;
	}
	public void setVillage(String village) {
		this.village = village;
	}
	public String getDeposit() {
		return deposit;
	}
	public void setDeposit(String deposit) {
		this.deposit = deposit;
	}
	public int getSpace() {
		return space;
	}
	public void setSpace(int space) {
		this.space = space;
	}
	public String getConstructyear() {
		return constructyear;
	}
	public void setConstructyear(String constructyear) {
		this.constructyear = constructyear;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public int getGap() {
		return gap;
	}
	public void setGap(int gap) {
		this.gap = gap;
	} 

}
