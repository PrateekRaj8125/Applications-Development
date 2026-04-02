registry={"Prateek":100,"Aryan":70,"Kushagra":20,"Soham":75, "Prahlad":85,"Raju":69}
threshold=int(input("Enter threshold value:"))
print("Name\t\tMarks")
for name,marks in registry.items():
    if marks>threshold:
        print(f"{name}\t\t{marks}")