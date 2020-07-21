var rating = [2,5,3,4,1]
var i;
var j;
var k;
var count=0;
for (i=0;i<rating.length;i++) {
    for (j=i+1;j<rating.length;j++) {
          if (rating[i]<rating[j])
            for(k=j+1; k<rating.length;k++) {
              if (rating[j] < rating[k])
                count++;
            }
          if (rating[i]>rating[j])
            for(k=j+1; k<rating.length;k++) {
                if (rating[j] > rating[k])
                count++;
            }
}
}
console.log(count);
